import { rest } from 'msw'

const getURL = (path: string) => process.env.REACT_APP_API_URL + `/${path}`

export const handlers = [
  rest.get(getURL('auth/token'), (req, res, ctx) => {
    return res(ctx.json({}))
  }),
]
