# == Schema Information
#
# Table name: amenities
#
#  id         :bigint(8)        not null, primary key
#  img_url    :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class AmenityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
