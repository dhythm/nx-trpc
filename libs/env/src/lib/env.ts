import penv from 'penv.macro'

export const API_URL = penv({
  development: 'http://api.development.example.com',
  stating: 'https://api.staging.example.com',
  production: 'https://api.production.example.com',
}, 'http://localhost:3000')


