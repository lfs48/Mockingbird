Rails.application.routes.draw do
      namespace :api, defaults: {format: :json} do
              resource :session, only: [:create, :destroy]
              resources :user, only: [:index, :create, :show]
              resources :secrets, only: [:show, :create]
      end
      root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
