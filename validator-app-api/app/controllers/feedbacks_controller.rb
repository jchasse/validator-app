class FeedbacksController < ApplicationController

    def create
        listing = Listing.find_by(id: params[:listing_id])
        listing.feedbacks.create(feedback_params)
        render json: ListingSerializer.new(listing)
    end


end
