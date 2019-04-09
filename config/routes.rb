Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :spots do 
      resources :bookings, only: [:create]
      resources :reviews, only: [:index, :create, :destroy]
    end
    resources :bookings, only: [:index, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end 

end
