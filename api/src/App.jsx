
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import List from './components/List'
import Single from './Single'

function App() {
  return (
    <Router>
<Routes>
  <Route path='/' element={<List />}/>
  <Route path='/single'  element={<Single />}/>
</Routes>
    </Router>
  )
}

export default App