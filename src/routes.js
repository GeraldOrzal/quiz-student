import App from './Views/App';
import Home from './Views/Student/Home';
import Error from './Views/Errors/Error';
import ViewQuiz from './Views/Student/ViewQuiz';

import { createBrowserRouter } from 'react-router-dom';
import authService from './Services/AuthService';
import quizService from './Services/QuizService';
const router = createBrowserRouter([
    {
      
      path: "/",
      element: 
        <App/>
      ,
      
      errorElement:<Error/>
    },
    {
        
        path: "/user/:id",
        element:<Home/>,
        loader: authService.user
    },
    {
            
      path: "/quiz/:id",
      element:<ViewQuiz/>,
      loader: quizService.checkIfCleared
    },
   
]);

export default router;