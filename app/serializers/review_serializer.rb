class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :score, :content
  has_one :user
  has_one :airline
end
