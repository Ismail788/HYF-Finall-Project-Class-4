// Update with your config settings.

module.exports = {
development: {
    client: 'pg',
    connection: {//'postgres://localhost/my_music',
    version: '10,4',
    host : '127.0.0.1',
    user : 'postgres',
    port : '5432',
    password : '4545',
    database : 'my_music'
},
    migrations: {
    directory: './db/migrations'
    },
    seeds: {
    directory: './db/seeds/dev'
  },

  },
    test: {
    client: 'pg',
    connection: //'postgres://localhost/my_music',
       {
     version: '10,4',
     host : '127.0.0.1',
     user : 'postgres',
     port : '5432',
     password : '4545',
     database : 'my_music'
  },
     migrations: {
    directory: './db/migrations'
  },
     seeds: {
    directory: './db/seeds/dev'
      },
    }
}
