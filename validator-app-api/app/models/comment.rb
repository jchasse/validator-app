class Comment < ApplicationRecord
  belongs_to :listing
  belongs_to :user, through: :listing
end
