class Feedback < ApplicationRecord
  belongs_to :listing
  belongs_to :user, through: :listing
end
