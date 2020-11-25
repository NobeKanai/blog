export const baseURL = process.env.NODE_ENV === 'production' ? 'https://www.nobekanai.top/api' : 'http://127.0.0.1:5000/api'

export * from './core'
export * from './external_link'