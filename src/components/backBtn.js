import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Times } from 'styled-icons/fa-solid';
import Logo from '../img/rfu_logo_sm.png';
import Animated from '../animated';
import { Link } from 'gatsby';

const Wrapper = styled(Link)`
    width: 80px;
    height: 80px;
    position: fixed;
    right: 20px;
    bottom: 20px; 
    background: #fff;
    border-radius: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border: solid 2px #333;
`
const Ico = styled(Times)`
    color: #951411;
`

const Image = styled.img`
    width: 90%;
    height: 90%;
`

const BackBtn = () => {
    const [animClass, setAnimClass] = useState('animated fadeInUp slow');
    const [animComplete, setAnimComplete] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setAnimComplete(true)
          }, 2500);
      }, [setAnimClass]);

    return (  
        <Wrapper state={{ noScroll: true }} to="/" className="animated fadeInUp">
            <Animated />
            {
                animComplete ?
                <Ico size="40" className='animated zoomIn' /> :
                <Image src={Logo} className='animated fadeOutRotate delay-1s slow' />
            }            
        </Wrapper>
    );
};

export default BackBtn;
