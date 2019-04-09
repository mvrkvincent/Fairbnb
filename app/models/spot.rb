# == Schema Information
#
# Table name: spots
#
#  id            :bigint(8)        not null, primary key
#  host_id       :integer          not null
#  name          :string           not null
#  accommodation :string           not null
#  rate          :integer          not null
#  num_guests    :integer          not null
#  num_beds      :integer          not null
#  num_baths     :integer          not null
#  img_url       :string
#  description   :text
#  city          :string           not null
#  address       :string           not null
#  lat           :float            not null
#  lng           :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Spot < ApplicationRecord
  validates :host_id, :name, :accommodation, :rate, :num_guests, :num_beds, 
            :num_baths, :city, :address, :lat, :lng, presence: true

  belongs_to :host,
    class_name: :User

  has_many :bookings,
    class_name: :Booking,
    foreign_key: :spot_id
  
  has_many :reviews,
    class_name: :Review,
    foreign_key: :spot_id

end
