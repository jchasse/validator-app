class User < ApplicationRecord
  # has_many :feedbacks
  has_many :listings, dependent: :destroy
  has_many :feedbacks, through: :listings
  has_many :comments, through: :listings
  # validates :email, presence: true
  # validates_uniqueness_of :email
  has_secure_password

  def full_name
    first_name + " " + last_name unless first_name.nil? || last_name.nil?
  end

end