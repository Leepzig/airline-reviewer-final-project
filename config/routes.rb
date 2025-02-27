Rails.application.routes.draw do
  
  resources :reviews
  resources :airlines, only: [:index, :show]
  # resources :users

  post "/signup", to: "users#create"
  get "/current-user", to: "users#get_current_user"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
