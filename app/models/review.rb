# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  spot_id    :integer          not null
#  guest_id   :integer          not null
#  body       :text             not null
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :spot_id, :guest_id, :body, :rating, presence: true

  belongs_to :spot,
    class_name: :Spot,
    foreign_key: :spot_id

  belongs_to :guest,
    class_name: :User,
    foreign_key: :guest_id

end
