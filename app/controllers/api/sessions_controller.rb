class Api::SessionsController < ApplicationController


  def show
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
    )

    if @user
      login(@user)
      render :show
    else
      render json: ['Password invalid', 'Email invalid'], status: 422
    end

  end

  def destroy

    if current_user
      logout
    else
      render json: ['Not logged in'], status: 404
    end

  end

end
