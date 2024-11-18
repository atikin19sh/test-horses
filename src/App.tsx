import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import Game from './pages/Game/Game';
import Pictures from './pages/Pictures/Pictures';
import Profile from './pages/Profile/Profile';

import './App.css'
import Layout from './components/Header/Header';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route element={<Game/>} path="/" index/>
        <Route element={<Profile/>} path="/profile"/>
        <Route element={<Pictures/>} path="/pictures"/>
      </Route>
    )
    // {
    //   path: "/",
    //   element: <MainPage />,
    // },
    // {
    //   path: "/game",
    //   element: <Game />,
    // },
    // {
    //   path: "/profile",
    //   element: <Profile />,
    // },
    // {
    //   path: "/pictures",
    //   element: <Pictures />,
    // },
);

  return (
      <RouterProvider router={router} />
  )
}

export default App
