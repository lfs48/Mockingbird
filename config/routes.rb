Rails.application.routes.draw do
      namespace :api, defaults: {format: :json} do
              resource :session, only: [:create, :destroy]
              resources :users, only: [:index, :create, :show]

      end
      root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
