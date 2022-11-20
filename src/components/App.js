import { LoginPage } from 'pages/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './Layout';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Route>
      </Routes>
    </>
  );
}
