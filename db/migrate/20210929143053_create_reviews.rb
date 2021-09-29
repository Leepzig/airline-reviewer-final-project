class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.integer :score
      t.text :content
      t.string :type
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :airline, null: false, foreign_key: true

      t.timestamps
    end
  end
end
