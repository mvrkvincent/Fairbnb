# == Schema Information
#
# Table name: spots
#
#  id          :bigint(8)        not null, primary key
#  host_id     :integer          not null
#  name        :string           not null
#  type        :string           not null
#  rate        :integer          not null
#  num_guests  :integer          not null
#  num_beds    :integer          not null
#  num_baths   :integer          not null
#  img_url     :string
#  description :text
#  city        :string           not null
#  address     :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Spot < ApplicationRecord
  validates :host_id, :name, :type, :rate, :num_guests, :num_beds, 
            :num_baths, :city, :address, :lat, :lng, presence: true


end
