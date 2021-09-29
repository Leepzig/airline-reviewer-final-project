class Airline < ApplicationRecord

  has_many :reviews
  has_many :airlines, through: :reviews


  def average_score
    review_scores = self.reviews.map {|review| review.score}
    if self.reviews.count == 0
      return 0
    else
      review_scores.sum / self.reviews.count
    end
  end
end
