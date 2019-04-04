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
  # validates :check_in, :check_out, uniqueness: {scope: :spot_id, message: 'Spot is not available for these dates' }
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

  def approve
    raise 'booking open' unless self.status == 'PENDING'
    transaction do
      self.status = 'APPROVED'
      self.save

      pending_overlap.each do |booking|
        booking.update!(status: 'REJECTED')
      end
    end
  end

  def approved?
    self.status == 'APPROVED'
  end
  
  def pending?
    self.status == 'PENDING'
  end

  def rejected?
    self.status == 'REJECTED'
  end

  def reject
    self.status = 'REJECTED'
    self.save!
  end


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

  def approved_overlap
    request_overlap.where("status = 'APPROVED'")
  end

  def pending_overlap
    request_overlap.where("status = 'PENDING'")
  end

  # validity based on guest confirmation during host ui buildout
  def valid_booking

    return if self.rejected?

    unless confirmed_overlap.empty?
      errors[:base] << 'Spot is not available for these dates'
    end
  end


end
