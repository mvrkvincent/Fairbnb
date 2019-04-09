class Api::BookingsController < ApplicationController

  def index
    @bookings = current_user.bookings
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id

    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end

  end

  def update

    @booking = current_user.bookings.find(params[:id])

    if @booking.update(booking_params)
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = current_user.bookings.find(params[:id])
    @booking.destroy
  end




  private

  def booking_params
    params.require(:booking).permit(:check_in, :check_out, :num_guests, :host_id, 
                                    :spot_id, :total_rate, :status)
  end

end
