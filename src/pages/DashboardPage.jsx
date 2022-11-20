import { useLogOutRedirect } from '../hooks/useLogOutRedirect.js';

export const DashboardPage = () => {
  useLogOutRedirect();

  return <div>Dashboard Page</div>;
};
