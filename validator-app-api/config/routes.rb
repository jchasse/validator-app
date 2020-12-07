Rails.application.routes.draw do

  resources :comments
  resources :users
  resources :feedbacks
  resources :listings

  resources :listings do
    resources :feedbacks
  end

  resources :listings do
    resources :comments
  end

  # From prior project:

  # # Static
  # root 'static#home' # get '/', to:'static#home'
  # get '/top5', to: 'static#top'

  # # Sessions
  post '/login' => 'auth#create' 
  post '/logout' => 'session#destroy'

  # get '/auth/facebook/callback' => "session#create_with_fb"

  # # Models
  #  get '/signup' => 'users#new' # , as: 'register' not neccessary but good option as the app builds (register_path vs new_user_path)
  
    # resources :users, except: [:index] do   # get 'users/:id', to: 'posts#show' + all other remaining RESTful routes with exception of :index
  #   resources :accounts
  # end

end
