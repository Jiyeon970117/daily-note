import styles from './app.module.css';
import Login from './component/login/login';
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Daily from './component/daily/daily'

function App({authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={ <Login authService={authService} /> } />
          <Route path='/daily' element={ <Daily authService={authService} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
