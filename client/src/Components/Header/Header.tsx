import React, { useState } from 'react'

// Components
import Container from '../Container'
import Button from './Button/Button'
import Nav from './Nav/Nav'

// Animation 
import { AnimatePresence, motion } from 'framer-motion';

// css 
import './HeaderStyle.css'

const menu = {
    open: {
        width: "480px",
        height: "650px",
        top: "-25px",
        right: "-25px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
    }
}

const Header = () => {

  const [isActive, setIsActive] = useState(false)


  return (
    <div className='header'>
        <Container>
          <motion.div variants={menu} animate={isActive ? "open" : "closed"} initial="closed" className='relative rounded-[25px] bg-[#c9fd74] h-[650px] w-[480px]'>
<AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
          </motion.div>
          <Button isActive={isActive} setIsActive={setIsActive}/>
        </Container>
    </div>
  )
}

export default Header