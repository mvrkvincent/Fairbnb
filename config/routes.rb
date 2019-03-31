Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :spots
    resources :bookings, only: [:create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end 

end
