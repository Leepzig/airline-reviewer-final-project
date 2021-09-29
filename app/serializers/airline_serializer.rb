class AirlineSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :logo

  has_many :reviews
end
