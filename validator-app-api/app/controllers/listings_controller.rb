class ListingsController < ApplicationController

    def index 
        listings = Listing.all
        render json: ListingSerializer.new(listings)
    end

    def create
        listing = Listing.create(listing_params)
        render json: ListingSerializer.new(listing)
    end


    private

    def listing_params
        params.require(:listing).permit(:title, :city, :state, :content, :price, :cashflow, :link)
    end

end
