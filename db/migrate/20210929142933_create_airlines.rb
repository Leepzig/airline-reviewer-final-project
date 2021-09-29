class CreateAirlines < ActiveRecord::Migration[6.1]
  def change
    create_table :airlines do |t|
      t.string :name
      t.string :country
      t.string :logo

      t.timestamps
    end
  end
end
