import React from 'react';
import { motion } from 'framer-motion';

import { links, footerLinks } from './Data';
import { perspective, slideIn } from "./anim";
import './Nav.css';

export default function Index() {
  return (
    <div className="nav">
      <div className="body">
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className="linkContainer">
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={href}>
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className="footer">
        {footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              href={href}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
