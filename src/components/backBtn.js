import React from 'react';
import styled from 'styled-components';
import { Times } from 'styled-icons/fa-solid';
import Animated from '../animated';
import { Link } from 'gatsby';

const Wrapper = styled(Link)`
    width: 80px;
    height: 80px;
    position: fixed;
    right: 20px;
    bottom: 20px; 
    background: #951411;
    border-radius: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid 2px #fff;
`
const Ico = styled(Times)`
    color: #fff;
`

const BackBtn = () => {
    return (  
        <Wrapper state={{ noScroll: true }} to="/" className="animated delay-1s fadeInUp">
            <Animated />
            <Ico size="40" className='animated delay-2s zoomIn' />         
        </Wrapper>
    );
};

export default BackBtn;
