import { FC } from 'react';
import MainHeader from './main-header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
