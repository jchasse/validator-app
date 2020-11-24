class ListingsController < ApplicationController

    def index 
        listings = Listing.all
        render json: ListingSerializer.new(listings)
    end
    
end
