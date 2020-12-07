class CommentsController < ApplicationController
    # before_action :set_listing, except: [:create]

    def create
        listing = Listing.find_by(id: params[:listing_id])
        listing.comments.create(comment_params)
        render json: ListingSerializer.new(listing)
    end

    def update
        listing = Listing.find_by(id: params[:listing_id])
        comment = Comment.find_by(id: params[:id])
        comment.update(comment_params)
        render json: ListingSerializer.new(listing)
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        listing = Listing.find_by(id: comment.listing_id)
        comment.delete
        render json: ListingSerializer.new(listing)
    end

    private

    # def set_listing
    #     @listing = Listing.find_by(id: params[:listing_id])
    # end

    def comment_params
        params.require(:feedback).permit(:comment)
    end
    
end
