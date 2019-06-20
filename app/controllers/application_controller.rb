class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
<<<<<<< HEAD
    user.reset_session_token!
    session[:session_token] = user.session_token
=======
    # user.reset_session_token!
    # session[:session_token] = user.session_token
>>>>>>> 88aabc00991f02e352fb8185298409b7f6f203b7
    @current_user = user
  end

  def logout
<<<<<<< HEAD
    current_user.reset_session_token!
    session[:session_token] = nil
=======
    # current_user.reset_session_token!
    # session[:session_token] = nil
>>>>>>> 88aabc00991f02e352fb8185298409b7f6f203b7
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end

end
