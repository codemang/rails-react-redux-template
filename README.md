Application Server Template
==========================

This is a template for a dockerized development environment with my go-to
technologies.

## Technologies

#### Server:
* Ruby on Rails

#### Data Stores:
* Postgres
* Redis

#### Frontend Libraries
* React + Redux + ES6 + Webpacker
* HAML

#### Add-Ons:
* Sidekiq
* ActiveAdmin
* Devise

## Host Dependencies

1. Docker for Mac
1. Docker Sync

```
$ gem install docker-sync
```

## Setup

1. Clone the repo into a new directory

1. Replace all instaces of `"rails_template"` in the docker-compose.yml file with the name you
   want for the docker image.

1. Create the env file from the template

    ```bash
    $ cp .env.template .env
    ```

1. Build the docker image

    ```bash
    $ docker-compose build
    ```

1. Install gems

    ```bash
    $ docker-compose run web bundle install
    ```

1. Install yarn packages

    ```bash
    $ docker-compose run web yarn install
    ```

1. Initialize the database

    ```bash
    $ docker-compose run web rake db:setup
    $ docker-compose run web rake db:migrate
    $ docker-compose run web rake db:seed
    ```

1. Start file syncing

    ```bash
    $ docker-sync start
    ```

1. Start the containers

    ```bash
    $ docker-compose up
    ```

## Frontend Site

### Viewing

The frontend site can be found at [localhost:3000](localhost:3000). If you are
using docker-machine, you might need to provide the IP address of that machine
instead of localhost.
