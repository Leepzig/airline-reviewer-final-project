class AirlineReviewsSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :logo, :review_count, :average_score

  def review_count
    self.object.reviews.count
  end

  def average_score
    self.object.average_score
  end

  has_many :reviews
end
