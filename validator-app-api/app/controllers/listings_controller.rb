class ListingsController < ApplicationController

    def index 
        listings = Listing.all
        render json: ListingSerializer.new(listings)
    end

    def create
        listing = Listing.create(listing_params)
        render json: ListingSerializer.new(listing)
    end

    def update
        listing = Listing.find_by(id: params[:id])
        listing.update(listing_params)
        render json: ListingSerializer.new(listing)
    end

    def destroy
        listing = Listing.find_by(id: params[:id])
        listing.delete
        render json: {message: "Success"}
    end

    private

    def listing_params
        params.require(:listing).permit(:title, :city, :state, :content, :price, :cashflow, :link, :votes)
    end

end
