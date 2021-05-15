import { server as devServer } from './dev-server'
import { server as testServer } from './test-server'

// const isTestEnv = process.env.NODE_ENV === 'test' ? true : false
const isDevEnv = process.env.NODE_ENV === 'development' ? true : false

export const server = isDevEnv ? devServer : testServer
export * from 'msw'
