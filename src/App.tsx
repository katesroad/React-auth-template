import AuthedApp from 'App.Authed'
import UnAuthedApp from 'App.UnAuthed'
import { useAuth } from 'context/auth.context'
import { Route, Switch } from 'react-router'
import IndexScreen from 'screens'

function App() {
  const { user } = useAuth()
  return (
    <Switch>
      <Route path="/" exact component={IndexScreen} />
      {user ? <AuthedApp /> : <UnAuthedApp />}
    </Switch>
  )
}

export default App
