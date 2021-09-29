class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :password_digest

  has_many :reviews
end
