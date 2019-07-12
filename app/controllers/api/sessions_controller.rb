class Api::SessionsController < ApplicationController
  def create
    
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    
    if @user
      login(@user)
      render "api/user/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    
    @user = current_user
    if @user
      
      logout
      
      render "api/user/show"
    else
      render json: ["Nobody signed in"], status: 422
    end
  end
end
