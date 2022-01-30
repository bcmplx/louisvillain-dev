import React from 'react';
import styled from 'styled-components';
import './loader.css'

function Loader(props) {

  return (
      <LoaderSection active={props.active}>
            <div class="dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
      </LoaderSection>
		
  );
}

export default Loader;

const LoaderSection = styled.div`
    height: calc(100vh + 100px);
    z-index: 1000;
    position: fixed;
    visibility: ${({active}) => active ? 'visible' : 'hidden'} ;
`
