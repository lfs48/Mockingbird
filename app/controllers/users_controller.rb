class Api::UserController < ApplicationController
  
  def index
    @users = User.all
  end
  
  def show
    # doesn't do anything
    @user = User.find_by(id: params[:id])
    render :show
  end
  
  def create
    
    @user = User.new(user_params)
    # debugger
    
    if @user.save
      login(@user)
      render "api/user/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    
    @user = User.find(params[:id])
  
    if @user.update(user_params)
        render :show
    end

  end

  private

  def user_params
    params.require(:user).permit(:username, :rupees, :active, :password, :email, :language_strength, :site_streak, :learning_language, :learning_language_string, :rupees)
  end
end
