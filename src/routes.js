import App from './Views/App';
import Home from './Views/Student/Home';
import Error from './Views/Errors/Error';
import ViewQuiz from './Views/Student/ViewQuiz';
import { createBrowserRouter } from 'react-router-dom';
const router = createBrowserRouter([
    {
      
      path: "/",
      element: <App/>,
      errorElement:<Error/>
    },
    {
        
        path: "/user/:id",
        element: <Home/>,
        
    },
    {
            
      path: "/quiz/:id",
      element: <ViewQuiz/>,
    },
   
]);

export default router;