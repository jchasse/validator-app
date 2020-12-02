class FeedbackSerializer
  include FastJsonapi::ObjectSerializer
  attributes :comment, :listing_id, :created_at, :updated_at
end
