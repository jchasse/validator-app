class ListingSerializer
  include FastJsonapi::ObjectSerializer
  attributes     :title, :city, :state, :content, :price, :cashflow, :link, :votes, :created_at
end
