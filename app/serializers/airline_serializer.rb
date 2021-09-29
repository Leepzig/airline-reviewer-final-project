class AirlineSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :logo, :average_score, :review_count


  def review_count
    self.object.reviews.count
  end

  def average_score
    self.object.average_score
  end
end
