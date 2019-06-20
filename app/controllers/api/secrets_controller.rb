class SecretsController < ApplicationController

    def show 
        @secret = Secret.find(params[:id])
        render :show
    end

    def create
        @secret = Secret.new(secret_params)
        if @secret.save
            login(@secret)
            render "api/secret/show"
            else
            render json: @secret.errors.full_messages, status: 422
        end
    end

    def secret_params
        params.permit(:message, :lat, :long, :time_start, :time_end)
    end
end