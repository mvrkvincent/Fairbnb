class Api::SpotsController < ApplicationController

  def index
    @spots = Spot.all
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def create
    @spot = Spot.new(spot_params)

    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
    
  end

  def update
    @spot = Spot.find(params[:id])

    if @spot.update_attributes(spot_params)
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end

  end

#   def destroy
#     @spot = current_user.spots.find(params[:id])
#   end

  private

  def spot_params
    params.require(:spot).permit( :host_id, :name, :accommodation, :rate, :num_guests, :num_beds, 
                                  :num_baths, :city, :address, :lat, :lng, :ave_rating )
  end

end
