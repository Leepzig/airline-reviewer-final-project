class Airline < ApplicationRecord

  has_many :reviews
  has_many :airlines, through: :reviews
end
