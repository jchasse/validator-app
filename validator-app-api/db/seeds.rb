# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# @listing = Listing.create({
#     title: "Great San Antonio pool route",
#     city: "San Antonio",
#     state: "TX",
#     content: "The perfect route for a buyer that has little or no pool experience. It consists of 35 accounts generating a guaranteed $6,500 per month plus income from repairs. During the current pandemic, pool companies have been classified as essential because of the requirement to treat the water to prevent mosquitoes.",
#     price: "110,000",
#     cashflow: "100,000",
#     link: "https://www.bizbuysell.com/Business-Opportunity/great-san-antonio-pool-route/1769169?d=L3RleGFzLWJ1c2luZXNzZXMtZm9yLXNhbGU=",
#     votes: 22
# })

# @listing.feedbacks.create(good_deal: true, love: true, neighborhood: false, overpriced: true, underpriced: false)

# @user = User.create( fname: "Mike", lname: "Test", email: "mike@test.com", mobile: "972-900-1322", password: "mike" )

@listing1 = Listing.create(title: "eCom Co-2 In House Brands-Mushroom Cultivation", city: "Chicago", state: "IL", content: "Website Closers® presents an extremely rare opport...", price: "$5,500,000", cashflow: "$1,031,000", link: "https://images.unsplash.com/photo-1512595765784-5ebad80772a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80", votes: "", user_id: 1)
@listing2 = Listing.create(title: "Bakery - Bread/Pastry/Cakes - Premier destination", city: "New York City", state: "NY", content: "Award Wining and Renowned bakery in NYC, featured ...", price: "$1,350,000", cashflow: "$200,000", link: "https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1876&q=80", votes: "", user_id: 1)
@listing3 = Listing.create(title: "Profitable Gymnastics Center for Sale Long Island", city: "Long Island", state: "NY", content: "This is a great opportunity to own a well-establis...", price: "$685,000", cashflow: "$300,00", link: "https://images.unsplash.com/photo-1546920120-d60663fd4965?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80", votes: "", user_id: 1)