import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import QuizDetails from './Components/QuizDetails/QuizDetails';
import Statistic from './Components/Statistic/Statistic';
import Root from './Layout/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children: [
        {
          path: '/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quiz/:id',
          element: <QuizDetails></QuizDetails>,
          loader: async({params})=>{
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.id}`)
          }
        },
        {
          path: '/statistic',
          element: <Statistic></Statistic>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <Error></Error>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
