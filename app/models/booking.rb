# == Schema Information
#
# Table name: bookings
#
#  id         :bigint(8)        not null, primary key
#  spot_id    :integer          not null
#  guest_id   :integer          not null
#  host_id    :integer          not null
#  check_in   :date             not null
#  check_out  :date             not null
#  num_guests :integer          not null
#  total_rate :integer          not null
#  status     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord
  validates :spot_id, :guest_id, :host_id, :check_in, :check_out, 
            :num_guests, :total_rate, presence: true

  validate :valid_booking

  belongs_to :host,
    class_name: :User,
    foreign_key: :host_id

  belongs_to :guest,
    class_name: :User,
    foreign_key: :guest_id

  belongs_to :spot,
    class_name: :Spot,
    foreign_key: :spot_id
  
  BOOKING_STATUS = ['PENDING', 'APPROVED', 'CONFIRMED', 'REJECTED']

  after_initialize :assign_status

  private

  def assign_status
    self.status ||= 'PENDING'
  end

  def request_overlap
    Booking
      .where.not(id: self.id)
      .where(spot_id: spot_id)
      .where.not('check_in > :check_out OR check_out < :check_in',
        check_in: check_in, check_out: check_out)
  end

  def confirmed_overlap
    request_overlap.where(("status = 'CONFIRMED'"))
  end


  # validity based on guest confirmation during host ui buildout
  def valid_booking

  

    unless confirmed_overlap.empty?
      errors[:base] << 'Spot is not available for these dates'
    end
  end


end
