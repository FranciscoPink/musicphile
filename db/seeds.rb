# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all
Genre.destroy_all
Song.destroy_all

@randomer = Artist.create!(name: 'Randomer')
@aurora = Artist.create!(name: 'Aurora Halal')

@house = Genre.create!(name:'House')
@techno = Genre.create!(name:'Techno')

Song.create!(name:"untz", genre: @house, artist:@randomer)
Song.create!(name:"Fium", genre: @techno, artist: @aurora)
Song.create!(name:"Badum", genre: @techno, artist: @aurora)

puts "Created"