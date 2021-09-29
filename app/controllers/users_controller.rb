class UsersController < ApplicationController

  def show
    @user = User.find_by_id(session[:user_id])
    if @user
      render json: @user, status: :ok
    else
      render json: {error: "user not logged in"}, status: :unauthorized
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login_user
      render json: @user, status: :created
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
    def user_params
      params.permit(:email, :name, :password, :password_confirmation)
    end
end
