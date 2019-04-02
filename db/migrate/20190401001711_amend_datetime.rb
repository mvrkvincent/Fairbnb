class AmendDatetime < ActiveRecord::Migration[5.2]
  def change
    change_column :bookings, :check_in, :date
    change_column :bookings, :check_out, :date
  end
end
