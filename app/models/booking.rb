# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  spot_id    :integer          not null
#  guest_id   :integer          not null
#  host_id    :integer          not null
#  check_in   :datetime         not null
#  check_out  :datetime         not null
#  num_guests :integer          not null
#  total_rate :integer          not null
#  status     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :spot_id, :guest_id, :host_id, :check_in, :check_out, 
            :num_guests, :total_rate, presence: true

  belongs_to :host,
    class_name: :User
    
  belongs_to :host


end
