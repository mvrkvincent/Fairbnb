class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.integer :host_id, null: false
      t.string :name, null: false
      t.string :type, null: false
      t.integer :rate, null: false
      t.integer :num_guests, null: false
      t.integer :num_beds, null: false
      t.integer :num_baths, null: false
      t.string :img_url
      t.text :description
      t.string :city, null: false
      t.string :address, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.index :city
      t.index :address, unique: true

      t.timestamps
    end
  end
end
