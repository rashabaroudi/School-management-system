
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './route.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>

     <RouterProvider router={routes} />

  </Provider>
 

)
