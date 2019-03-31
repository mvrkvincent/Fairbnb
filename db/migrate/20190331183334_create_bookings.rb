class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :spot_id, null: false
      t.integer :guest_id, null: false
      t.integer :host_id, null: false
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false
      t.integer :num_guests, null: false
      t.integer :total_rate, null: false
      t.string :status

      t.timestamps
    end
  end
end
