import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

function Layout(): JSX.Element {
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <Header />
    //   </header> */}
    //   <body className="App-body">
    <>
      {/* <Menu /> */}
      <Outlet />
    </>
    //   </body>
    // </div>
  );
}

export default Layout;
