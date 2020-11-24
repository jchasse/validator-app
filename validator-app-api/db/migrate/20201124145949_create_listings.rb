class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :city
      t.string :state
      t.string :content
      t.string :price
      t.string :cashflow
      t.string :link
      t.string :votes

      t.timestamps
    end
  end
end
