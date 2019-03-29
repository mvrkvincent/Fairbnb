class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?, :authenticate_user!

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_token
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    @current_user.reset_token
    session[:session_token] = nil
    @current_user = nil
  end

  private

  def authenticate_user!
    redirect_to :root unless logged_in?
  end


end
