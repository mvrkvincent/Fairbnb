class AddRatingTSpot < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :ave_rating, :integer
  end
end
