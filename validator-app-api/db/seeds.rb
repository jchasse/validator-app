# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@listing = Listing.create({
    title: "Great San Antonio pool route",
    city: "San Antonio",
    state: "TX",
    content: "The perfect route for a buyer that has little or no pool experience. It consists of 35 accounts generating a guaranteed $6,500 per month plus income from repairs. During the current pandemic, pool companies have been classified as essential because of the requirement to treat the water to prevent mosquitoes.",
    price: "110,000",
    cashflow: "100,000",
    link: "https://www.bizbuysell.com/Business-Opportunity/great-san-antonio-pool-route/1769169?d=L3RleGFzLWJ1c2luZXNzZXMtZm9yLXNhbGU=",
    votes: 22
})

@listing.feedbacks.create(good_deal: true, love: true, neighborhood: false, overpriced: true, underpriced: false)




# @user = User.create(first_name: "Max", last_name: "Charles", email: "max@test.com", mobile_number: "123-456-7890", password: "max")
# @account = Account.create(org_name: "Google", website: "google-legal-support@google.com", toll_free_number: "1-800-123-4567")
# @user.digitalprints.create(kind: "Email", account_id: @account.id)


