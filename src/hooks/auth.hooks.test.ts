import { renderHook } from '@testing-library/react-hooks'
import AppProviders from 'context'
import { rest, restContext, server } from 'test/server'
import { useGetUser } from './auth.hooks'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

test('get user', async () => {
  const { result, waitFor } = renderHook(() => useGetUser(), {
    wrapper: AppProviders,
  })
  server.use(
    rest.get('https://ticket.app/auth/token', (req, res, ctx) => {
      return res(ctx.json({}))
    })
  )
  await waitFor(() => result.current.isFetched)
  console.log(result.current.data)
})
