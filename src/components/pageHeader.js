import React from 'react';
import styled from 'styled-components';
import Image from '../img/page_header.jpg';

const Img = styled.img`
    width: 100%;
    height: auto;
    padding-top: 20px;
`

const PageHeader = () => (
    <Img src={Image} alt="Red Foxes United" />
);

export default PageHeader;