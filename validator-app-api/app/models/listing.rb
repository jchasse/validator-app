class Listing < ApplicationRecord
    has_many :feedbacks, dependent: :destroy
end
