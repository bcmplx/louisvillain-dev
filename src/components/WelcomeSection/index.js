import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Loader from './loader';

function Welcome() {
    const [rideau, setRideau] = useState(true)

    const [active, setActive] = useState(true)

    useEffect(() => {
        document.body.style.overflow = "hidden"
        setTimeout(() => {
            setActive(false)
            
        }, 3000);

        setTimeout(() => {
            document.body.style.overflow = "auto"
            setRideau(false)
        }, 4000);
    }, [])

  return (
      <>
        <WelcomeSection rideau={rideau}>
            
            <TopPart></TopPart>
            <BottomPart></BottomPart>
        </WelcomeSection>
        <Loader active={active}/>
      </>
		
  );
}

export default Welcome;

const WelcomeSection = styled.div`
  height: calc(100vh + 200px);
  width: 100vw;
  /* display: ${({active}) => active ? 'flex' : 'none'}; */
  visibility: ${({rideau}) => rideau ? 'visible' : 'hidden'};
  flex-direction: column;
  position: fixed;
  z-index: 999;
  transition: 1s all ease-in-out;

  & > div {
    background: #152436;
    position: absolute;
    height: ${({rideau}) => rideau ? '50%' : 0};
    transition: 1s all ease-in-out;
    width: 100%;
    box-shadow: 1px 5px black;
  }
`
const TopPart = styled.div`
    transition: 1s all ease-in-out;
    top: 0;
`
const BottomPart = styled.div`
    bottom: 0;
    transition: 1s all ease-in-out;
`