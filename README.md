![](https://img.shields.io/badge/Microverse-blueviolet)

# Rails-React Setup

## About

This is a Rails-React setup project built for learning purposes.

This project uses Rails routes to provide information through an API endpoint, and configured views to render React components, also connects React and Redux to handle dispatch actions.

My development flow included: performing git flow practices & using components with routers, life cycle methods,handling events and state management by Redux store,actions, reducers in [duck Pattern](https://github.com/erikras/ducks-modular-redux), also configuring rails routes and views to display correct info, and controllers setup.

## Built With

- Ruby on Rails
- Javascript
- React & Redux
- Redux Middleware (Thunk, Logger)

## Getting Started

To get a local copy up and run the app; follow below steps.

### Prerequisites

If you are not familiar to use terminal, please check this [article](https://www.theodinproject.com/courses/web-development-101/lessons/command-line-basics-web-development-101)

# How to use

- Make sure you have Ruby and Rails installed on your computer. If you don't have it, simply install [Ruby](https://www.ruby-lang.org/pt/documentation/installation/), and follow this tutorial to install [rails](https://gorails.com/setup/ubuntu/20.10).

- Use the terminal to navigate to a folder where you want to clone the files, for example C:

- Then, clone this repository to your computer. You clone a repository with:

> git clone https://github.com/jonathastavares/hello-rails-react.git

- Remember that the files will be cloned to the current directory where you are at.

- After cloning the repository, navigate through the command line to the folder where the repository was cloned, and run the command:

> bundle install

- Now it is time to create and migrate our database, run the following command:

> rake db:setup

- Then run the following command:

> rake db:migrate

- Since we are about to check a React project, which uses node modules, we also need to run:

> npm install

- After installing all dependencies, use the following command to start the server for the application:

> rails server

- Now, open a new terminal window, remember to navigate to the project folder, and run the following command to start webpack-dev-server:

> ./bin/webpack-dev-server

- Visit http://127.0.0.1:3000 to check if it's working..

## Authors

👤 **Jonathas Tavares**

- GitHub: [jonathastavares](https://github.com/jonathastavares)
- LinkedIn: [Jonathas Tavares](https://www.linkedin.com/in/jonathas-tavares)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./MIT.md) licensed.
