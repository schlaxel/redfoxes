import React from "react";
import { Link } from 'gatsby';
import Header from '../components/header';
import Muenster from '../components/muenster';
import News from '../components/news';
import NextGame from '../components/bundesliga/nextGame';
import Standings from '../components/bundesliga/standings';
import SiteWrapper from '../components/siteWrapper';
import styled from 'styled-components';
import Instagram from "../components/instagram";

const Content = styled.div`
    padding: 20px;
    box-sizing: border-box;
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

const P = styled.p`
  color: #951411;
  max-width: 450px;
  margin: auto;
  padding: 10px 0;
  font-size: 1em;
`

const IndexPage = () => {
    return (
        <SiteWrapper>
            <Header />
                <Content>
                <Heading>
                    Red Foxes United
                </Heading>
                <P>SC Freiburg supporter. Wir unterstützen den Sportclub bei Heim - und Auswärtsspielen. Mal mehr, aber eher weniger
                    organisiert. In Zukunft möchten wir das ändern.</P>
                <News />
            </Content>
            <Muenster />
            <Instagram />
            <NextGame />
            <Standings />
        </SiteWrapper>
    )
};

export default IndexPage;
