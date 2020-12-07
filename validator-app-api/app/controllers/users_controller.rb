class UsersController < ApplicationController
    # skip_before_action :authorized, only: [:create]
    # before_action :redirect_if_logged_in, only: [:new]
    # before_action :set_user, except: [:index, :create]

    def index 
        users = User.all
        render json: UserSerializer.new(users)
    end

    # def create
    #     user = User.create(user_params)
    #     render json: UserSerializer.new(user)
    # end

    def profile
        render json: { user: UserSerializer.new(current_user) }, status: :accepted
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
          @token = encode_token(user_id: @user.id)
          render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        else
          render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end

    def update
        user = User.find_by(id: params[:id])
        user.update(user_params)
        render json: UserSerializer.new(user)
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.delete
        render json: {message: "Success"}
    end

    private

    # def set_user
    #     @user = User.find_by(id: params[:id])
    # end

    def user_params
        params.require(:user).permit(
            :id,
            :fname, 
            :lname, 
            :email, 
            :mobile, 
            :password
        )
    end


end