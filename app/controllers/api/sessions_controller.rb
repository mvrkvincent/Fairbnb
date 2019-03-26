class Api::SessionsController < ApplicationController

  def create
    @user.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
    )

    if @user
      login(@user)
      render :show
    else
      render json: { errors: ['invalid credentials, try again'] }, status: 422
    end

  end

  def destroy

    if current_user
      logout
    else
      render json: { errors: ['not logged in']}, status: 404
    end

  end

end
