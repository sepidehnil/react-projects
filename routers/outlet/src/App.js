import { Routes, Route, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Notfoundpage } from './pages/Notfoundpage';
import { Layout } from './components/Layout'
//An <Outlet> should be used in parent route elements to render their child route elements. 
//This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, 
//it will render a child index route or nothing if there is no index route.
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  )};