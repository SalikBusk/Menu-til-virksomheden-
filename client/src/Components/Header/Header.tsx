import React, { useState } from 'react'
import Container from '../Container'
import Button from './Button/Button'

const Header = () => {

  const [isActive, setIsActive] = useState(false)


  return (
    <div className='fixed right-[50px] top-[50px]'>
        <Container>
          <Button isActive={isActive} setIsActive={setIsActive}/>
        </Container>
    </div>
  )
}

export default Header