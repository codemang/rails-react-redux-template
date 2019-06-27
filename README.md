## Dependencies

1. docker
1. docker-compose

## Setup

1. Clone the repo into a new directory

1. Replace all instaces of `"rails_template"` in the Dockerfile with the name you
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
