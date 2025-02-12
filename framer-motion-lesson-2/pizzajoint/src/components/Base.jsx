import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  useEffect(() => {
    console.log('Base component is mounted');
    return () => console.log('Base component is unmounted');
  }, []); // Empty dependency array ensures this runs on mount/unmount only

  return (
    <AnimatePresence>
           <motion.div key="base"
        className="base container"
        exit={{ y: -100}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Step 1: Choose Your Base</h3>
        <ul>
          {bases.map((base) => {
            let spanClass = pizza.base === base ? 'active' : '';
            return (
              <li key={base} onClick={() => addBase(base)}>
                <span className={spanClass}>{base}</span>
              </li>
            );
          })}
        </ul>

        {pizza.base && (
          <div className="next">
            <Link to="/toppings">
              <button>Next</button>
            </Link>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
 
  );
};

export default Base;
