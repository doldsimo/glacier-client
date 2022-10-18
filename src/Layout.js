import React from 'react';
import TabBar from './Components/TabBar/TabBar';

const Layout = (props) => {

  return (
    <React.Fragment>
        <main>
            {props.children}
        </main>
        <nav>
            <TabBar/>
        </nav>
    </React.Fragment>
  )
}

export default Layout;