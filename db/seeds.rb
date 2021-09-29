# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email:"bobj@test.com", name: "Bob Junior", )
User.create(email:"bobs@test.com", name: "Bob Senior", )
User.create(email:"andrew@test.com", name: "Andrew", )

Airline.create()