class Review < ApplicationRecord
  belongs_to :user
  belongs_to :airline

  validates_presence_of :title, :score
  validates_length_of :content, minimum: 15
end
