import App from './Views/App';
import Home from './Views/Student/Home';
import Error from './Views/Errors/Error';
import ViewQuiz from './Views/Student/ViewQuiz';
import TakeQuiz from './Views/Student/TakeQuiz';

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
        
        path: "/home",
        element:<Home/>,
        loader: authService.user
    },
    {
            
      path: "/quiz/:id",
      element:<TakeQuiz/>,
      loader: quizService.checkIfCleared
    },
    {
            
      path: "/viewquiz/:id",
      element:<ViewQuiz/>,
      loader:quizService.getAnswers
    },

   
]);

export default router;