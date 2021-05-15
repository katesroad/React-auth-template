import { setupServer } from 'msw/node'
import { handlers } from './handlers'

const server = setupServer()

export * from 'msw'
export { server }
