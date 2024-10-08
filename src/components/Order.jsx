import React from 'react';
import MenuP from './MenuP';
import styles from '../style';
import Newmenu from './Newmenu';
import Pie from './Pie';
import Menutitle from './Menutitle';
import Main from './Main';

const Order = () => {
  return (
    // The main container for the Order section
    <section className='w-full min-h-screen bg-sky overflow-hidden '>
      
      {/* Menu title with the animated burger icon and heading */}
      <Menutitle />

      {/* Newmenu component will display the new menu section */}
      <Main />
      <Newmenu />

      {/* Pie component will display some content, maybe a chart or pie-related section */}
      <Pie />

      <div className='h-[80px] bg-sky'></div>
    </section>
  );
}

export default Order;
