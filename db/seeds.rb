# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email:"bobj@test.com", name: "Bob Junior", password:"123")
User.create(email:"bobs@test.com", name: "Bob Senior", password:"abc")
User.create(email:"andrew@test.com", name: "Andrew", password:"987")

Airline.create(name:"Delta", country:"USA", logo:"a picture")
Airline.create(name:"United", country:"USA", logo:"a picture")
Airline.create(name:"American Airlines", country:"USA", logo:"a picture")
Airline.create(name:"Avianca", country:"Colombia", logo:"a picture")

Review.create(title:"A Flight gone Wrong!", score: 5, content:"The flight attendance were not friendly in the slightest!", airline_id:2, user_id:2)
Review.create(title:"A Flight gone Wrong!", score: 3, content:"The flight attendance were not friendly in the slightest!", airline_id:1, user_id:3)
Review.create(title:"A Flight gone Wrong!", score: 4, content:"The flight attendance were not friendly in the slightest!", airline_id:4, user_id:1)
Review.create(title:"A Flight gone Wrong!", score: 1, content:"The flight attendance were not friendly in the slightest!", airline_id:3, user_id:2)
Review.create(title:"A Flight gone Wrong!", score: 1, content:"The flight attendance were not friendly in the slightest!", airline_id:1, user_id:1)