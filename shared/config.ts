const config = {
  development: {
    database: {
      host: 'localhost',
      user: 'root',
      password: 'Passw0rd',
      database: 'statz',
      prefix: 'statz',
    },
    siteTitle: 'Statz',
    siteDescription: 'Statz desc',
    siteTwitter: '@gariasf',
    siteUrl: 'http://localhost:3000',
  },
}

const env = process.env.ENVIRONMENT

const envConfig = config[env || 'development']

export default { ...envConfig }
