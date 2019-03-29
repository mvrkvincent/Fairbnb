class AmendSpotTypeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :spots, :type, :accommodation
  end
end
