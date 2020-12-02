class CreateFeedbacks < ActiveRecord::Migration[6.0]
  def change
    create_table :feedbacks do |t|
      t.string :comment
      t.references :listing, null: false, foreign_key: true

      t.timestamps
    end
  end
end

# t.boolean :good_deal
# t.boolean :love
# t.boolean :neighborhood
# t.boolean :overpriced
# t.boolean :underpriced
# t.references :listing, null: false, foreign_key: true

# t.timestamps