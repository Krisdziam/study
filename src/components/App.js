import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';
import { DashboardPage, LoginPage } from 'pages';
import { useDispatch, useSelector } from 'react-redux';
import { update,getClicksSelector } from 'redux/clicksSlice';


export function App() {
// const dispatch = useDispatch();
// const numberOfClicks = useSelector(getClicksSelector)


  return (
    <>
    {/* <div>
      <h1>Number Of Clicks: {numberOfClicks}</h1>
      <button type='button' onClick={()=> dispatch(update(5))}>ADD 5</button>
      <button type='button' onClick={()=> dispatch(update(10))}>ADD 15</button>
      <button type='button' onClick={()=> dispatch(update(20))}>ADD 20</button>
     </div> */}
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes> */}



    </>
  );
}
