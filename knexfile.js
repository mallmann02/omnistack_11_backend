// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
  
  test: {
    client: 'sqlite',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations:{
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },
  
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: 'postgres://nlvonlychcrcne:871fa8f063ebea1abc395e76191af2877f36bd6e59e051103f4b75ed17147dd1@ec2-54-198-73-79.compute-1.amazonaws.com:5432/davroh10d0mspk',
    pool: {
      min: 2,
      max: 20
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }

};
