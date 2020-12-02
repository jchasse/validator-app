class FeedbacksController < ApplicationController

    def create
        listing = Listing.find_by(id: params[:listing_id])
        listing.feedbacks.create(feedback_params)
        render json: ListingSerializer.new(listing)
    end

    def update
        feedback = Feedback.find_by(id: params[:id])
        feedback.update(feedback_params)
        listing = Listing.find_by(id: params[:listing_id])
        render json: ListingSerializer.new(listing)
    end

    def destroy
        feedback = Feedback.find_by(id: params[:id])
        listing = Listing.find_by(id: feedback.listing_id)
        feedback.delete
        render json: ListingSerializer.new(listing)
    end


end
