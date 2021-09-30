class Airline < ApplicationRecord

  has_many :reviews, dependent: :destroy
  has_many :airlines, through: :reviews


  def average_score
    review_scores = self.reviews.map {|review| review.score}
    if self.reviews.count == 0
      return 0
    else
      review_scores.sum / self.reviews.count
    end
  end

  def self.ordered_airlines
    self.all.sort {|airline1, airline2| airline2.average_score <=> airline1.average_score}
  end

  def review_count
    self.reviews.count
  end

  # def average_score
  #   self.average_score
  # end
end
