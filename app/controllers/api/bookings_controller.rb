class Api::BookingsController < ApplicationController

  def index
    @bookings = current_user.bookings
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    @booking.spot_id = params[:spot_id]
    @booking.host_id = Spot.find(params[:spot_id]).host_id

    if @booking.save
      render :show
    else
      render json: @bookings.errors.full_messages, status: 422
    end

  end

  def destroy
    @booking = current_user.bookings.find(params_id)
    @booking.destroy
  end




  private

  def booking_params
    params.require(:booking).permit(:check_in, :check_out, :num_guests)
  end

end
