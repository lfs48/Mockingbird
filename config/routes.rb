Rails.application.routes.draw do
<<<<<<< HEAD
      # namespace :api, defaults: {format: :json} do
              resource :session, only: [:create, :destroy] 

      # end
=======
      namespace :api, defaults: {format: :json} do
              resource :session, only: [:create, :destroy]
              resources :user, only: [:index, :create, :show]

      end
>>>>>>> 88aabc00991f02e352fb8185298409b7f6f203b7
      root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
