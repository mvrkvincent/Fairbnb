class Api::ReviewsController < ApplicationController

  def index
      @reviews = Review.where(spot_id: params[:spot_id])
  end

  def show
  end

  def create
    @review = Review.new(review_params)
    @review.guest_id = current_user.id

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

   def destroy
    @review = current_user.reviews.find(params[:id])
    @review.destroy
  end

  private
  def review_params
    params.require(:review).permit(:body, :rating, :spot_id)
  end

end
