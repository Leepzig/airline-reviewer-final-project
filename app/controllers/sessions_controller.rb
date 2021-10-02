class SessionsController < ApplicationController

  def create
    @user = User.find_by_email(params[:email])

    if @user&.authenticate(params[:password])
      login_user
      render json: @user, status: :ok
    else
      render json: {error: "Invalid username or password"}, status: :unauthorized
    end
  end

  def destroy
    session.clear
  end
end
