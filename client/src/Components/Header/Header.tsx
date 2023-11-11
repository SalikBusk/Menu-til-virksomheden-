import React from 'react'
import Container from '../Container'
import Button from './Button/Button'

const Header = () => {
  return (
    <div className='fixed right-[50px] top-[50px]'>
        <Container>
          <Button/>
        </Container>
    </div>
  )
}

export default Header