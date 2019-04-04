class CreateBookingFeatures < ActiveRecord::Migration[5.2]
  def change
    create_table :booking_features do |t|
      t.integer :spot_id, null: false
      t.integer :amenity_id, null: false
    end
  end
end
