import React from 'react';
import { Link } from 'react-router-dom';

import '/src/css/Sidebar.css'
import { motion } from 'framer-motion';

const Sidebar = () => {
  return (
    <motion.div className='sidebar' initial={{x:'-100%'}} animate={{x:0}} transition={{type: 'spring', stiffness:120}}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </motion.div>
  );
};

export default Sidebar;