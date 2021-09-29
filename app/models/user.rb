class User < ApplicationRecord
  has_secure_password
  has_many :reviews, dependent: :destroy
  has_many :airlines, through: :reviews

  validates_presence_of :email
  validates_presence_of :name
end
