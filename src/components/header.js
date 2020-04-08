import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../img/rfu_logo_sm.png';
import dreisam from '../img/dreisamstadion_white.png';

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
const Heading = styled.h1`
  color: #222;
  font-family: 'Fjalla One';
  text-transform: uppercase;
  font-size: 3.5em;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 2.5em;
  }
  @media (max-width: 350px) {
    font-size: 2em;
  }
  display: block;
  margin: 0;
  padding: 20px 0 0 0;
  background: #fff;
`
const SubHeading = styled.h2`
  color: #2e2e2e;
  font-family: 'Fjalla One';
  background: #fff;
  display: block;
  margin: 0;
  padding: 20px;
`

const P = styled.p`
  color: #951411;
  max-width: 450px;
  margin: auto;
  padding-bottom: 10px;
  font-size: 1em;
`
const Aktuell = styled.div`
  margin: 0 auto;
  width: 100%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
`
const Banner = styled.section`
  background: #951411;
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  margin: auto;
  max-width: 500px;
`
const H = styled.h1`
  font-size: 1.3em;
  color: #fff;
`
const PB = styled.p`
  color: '#fff';
  font-size: 1em;
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
      <HeadingWrapper>
        <LogoWrap scrollTop={scrollTop}>
          <Logo className="animated fadeInUp slower" src={logo} alt="Red Foxes United Logo" />
        </LogoWrap>
        <Dreisam src={dreisam} alt="Dreisamstadion" />
        <Heading>
          Red Foxes United
        </Heading>
        <Aktuell>
        <P>SC Freiburg supporter. Wir unterstützen den Sportclub bei Heim - und Auswärtsspielen. Mal mehr, aber eher weniger
          organisiert. In Zukunft möchten wir das ändern. Deshalb:</P>
        <Banner>
          <H>Mitgliederversammlung am 29. Mai 2020</H>
          <PB>Für alle interessierten Mitglieder und die, die es werden möchten. Beginn ist um 20:07 Uhr in der Lindenmatte.
            Bitte gebt uns bescheid, dass ihr kommt.</PB>
        </Banner>
        </Aktuell>
        <SubHeading>
          ⚽🌭🍺 since 2007
        </SubHeading>
      </HeadingWrapper>
    </Wrapper>
  )
};

export default Header;
