class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :score, :content, :type
  has_one :user
  has_one :airline
end
