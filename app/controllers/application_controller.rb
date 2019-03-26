class ApplicationController < ActionController::Base

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end


  def login(user)
    @current_user = user
    session[:session_token] = user.session_token
  end

  def logout
    @current_user.reset_token
    session[:session_token] = nil
  end

end
