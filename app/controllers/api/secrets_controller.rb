class Api::SecretsController < ApplicationController

    def show 
        @secret = Secrets.find(params[:id])
        render :show
    end

    def create
        
        @secret = Secrets.new(secret_params)
        if @secret.save
            login(@secret)
            render "api/secrets/show"
            else
            render json: @secret.errors.full_messages, status: 422
        end
    end

    def secret_params
        params.require(:secret).permit(:message, :lat, :long, :time_start, :time_end)
    end
end