class FeedbacksController < ApplicationController
    # before_action :set_listing, except: [:create]

    def create
        listing = Listing.find_by(id: params[:listing_id])
        listing.feedbacks.create(feedback_params)
        render json: ListingSerializer.new(listing)
    end

    def update
         listing = Listing.find_by(id: params[:listing_id])       
        feedback = Feedback.find_by(id: params[:id])
        feedback.update(feedback_params)
        render json: ListingSerializer.new(listing)
    end

    def destroy
        feedback = Feedback.find_by(id: params[:id])
        listing = Listing.find_by(id: feedback.listing_id)
        feedback.delete
        render json: ListingSerializer.new(listing)
    end

    private

    # def set_listing
    #     @listing = Listing.find_by(id: params[:listing_id])
    # end

    def feedback_params
        params.require(:feedback).permit(:comment)
    end

end
