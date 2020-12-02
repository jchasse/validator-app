class ListingSerializer
  include FastJsonapi::ObjectSerializer
  attributes     :title, :city, :state, :content, :price, :cashflow, :link, :votes, :created_at, :updated_at, :feedbacks
  
  # create a method to change the date/time format
end
