# My Contacts API

## Description

- This api was built during the [JStack](https://jstack.com.br/) course. The focus of this project is to let the user manage is contacs.
- This api was made with a front-end using react. If want to see more about that click [here](https://github.com/galleonpt/my-contacts-fe)

## Table of contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- NodeJS
- Docker

## Installation

To install and run this project you should tun the commands below:

- **Clone this repo**
```bash
  git clone git@github.com:galleonpt/my-contacts-api.git
```

- **Navigate to the project directory**
```bash
  cd my-contacts-api
```

- **Create the database container**
```bash
  docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

- **Start the database container**
```bash
  docker start pg
```

- **Run the database scripts to create the tables**
```bash
  > docker exec -it pg bash

  > psql -U root
```

Go to `schema.sql` copy all the content and past it on your terminal. This will create all the tables.

- **Start the app**
```bash
  npm run start
```

And now you are ready to go 🔥🔥🔥

## Features

- List contacts
- Get one contact
- Create contact
- Edit contact
- Delete contact

- List categories
- Create category

## Contributing

This project is finished but if you would like to contribute you can always clone it and open a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
