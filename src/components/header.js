import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../img/rfu_logo_sm.png';
import dreisam from '../img/dreisamstadion_white.png';
import Animated from '../animated';

const Wrapper = styled.header`

`
const Dreisam = styled.img`
  width: 100%;
  height: auto;
  max-width: 1000px;
  display: block;
  margin: auto;
  z-index: 999;
  @media (min-width: 1000px) {
  }
`
const Logo = styled.img`
  width: 100%;
  height: auto;
`

const LogoWrap = styled.div`
  width: ${props => 400 - props.scrollTop + 'px'};
  height: ${props => 400 - props.scrollTop + 'px'};
  position: fixed;
  left: 50%;
  top: ${props => 20 - props.scrollTop + 'px'};
  margin-left: ${props => -200 + (props.scrollTop / 2) + 'px'};
  z-index: -1;
  opacity: ${props => 1 - props.scrollTop / 200};
  @media (max-width: 370px) {
    width: ${props => 300 - props.scrollTop + 'px'};
    height: ${props => 300 - props.scrollTop + 'px'};
    margin-left: ${props => -150 + (props.scrollTop / 2) + 'px'};
  }
`

const HeadingWrapper = styled.div`
  padding: 190px 0 0 0;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  margin: auto;
  @media (max-width: 370px) {
    padding-top: 150px;
  }
`

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <Wrapper>
      <Animated />
      <HeadingWrapper>
        <LogoWrap scrollTop={scrollTop}>
          <Logo className="animated fadeInUp slower" src={logo} alt="Red Foxes United Logo" />
        </LogoWrap>
        <Dreisam src={dreisam} alt="Dreisamstadion" />
      </HeadingWrapper>
    </Wrapper>
  )
};

export default Header;
