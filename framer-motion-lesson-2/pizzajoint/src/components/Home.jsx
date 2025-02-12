import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import pageVariants from './util';

const Home = () => {
  return (
    <motion.div key="home" className="home container" initial = "initial" animate = "in" exit= "out" variants={pageVariants}>
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <button>
          Create Your Pizza
        </button>
      </Link>
    </motion.div>
  )
}

export default Home;