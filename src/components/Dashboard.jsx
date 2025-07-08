import React from 'react'
import Navbar from '../pages/Navbar'
import DashboardNavbar from '../pages/DashboardNavbar'
import './Dashboard.css';
import DashboardHeading from '../pages/DashboardHeading';
import Item1List from '../pages/Item1List';
import Stage2 from '../pages/Stage2';
import Stage3 from '../pages/Stage3';
import Stage4 from '../pages/Stage4';

const Dashboard = () => {
  return (
    <>
        <div><DashboardNavbar/></div>
        <section className='house'>
          <div id='scrollspyHeading1'>
             <DashboardHeading/>
          </div>
          <div>
            <Item1List/>
          </div>
          <div>
            <Stage2/>
          </div>
        </section>
        
        <section>
          <div>
            <Stage3/>
          </div>
        </section>
        <section>
          <Stage4/>
        </section>
    </>
  )
}

export default Dashboard