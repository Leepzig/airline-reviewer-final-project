class Review < ApplicationRecord
  belongs_to :user
  belongs_to :airline

  validates_presence_of :title, :score

end
