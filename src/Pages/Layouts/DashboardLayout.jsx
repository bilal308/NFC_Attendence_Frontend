import { Outlet } from 'react-router-dom';

import Header from '../../Components/Header/Header';

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
