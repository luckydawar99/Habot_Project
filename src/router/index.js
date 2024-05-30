
import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../page/Home';
import Login from '../page/Login';
import Singin from '../page/Singin';

const router = createBrowserRouter ([
    {
        path: "/",
        element:<App/>,
        children: [
            {
                path:"",
                element:<Home/>
            },
          {
            path:"login",
                element:<Login/>
            },
            {
                path:"/singin",
                element:<Singin/>
            }
            
        ]

    }
])


export default router