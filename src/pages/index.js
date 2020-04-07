import React from "react";
import { Link } from 'gatsby';
import Footer from '../components/footer';
import styled from 'styled-components'

const Wrap = styled.div`
    background: #333;
    padding: 20px;
    margin: 0;
    box-sizing: border-box;
    color: #fff;
`

const IndexPage = () => (
    <Wrap>
        <h1>Hello what the hell?</h1>
        <Link to="/about">About</Link>
        <Footer />
    </Wrap>
);

export default IndexPage;
