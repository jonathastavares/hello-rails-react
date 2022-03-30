Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*page', to: 'pages#index', constraints: -> (req) do
    !req.xhr? && req.format.html?
  end
  namespace :v1, defaults: { formart: 'json' } do
    get 'things', to: 'things#index'
  end
  root "pages#index"
end
