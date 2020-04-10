import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    padding: 20px;
    background: #A31602;
    box-sizing: border-box;
`
const WrapperInner = styled.div`
    max-width: 700px;
    margin: auto;
`

const Team = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-around;
    padding: 5px 0;
    background: ${props => props.isSC ? '#fff !important' : 'rgba(255,255,255,0.2)'};
    color: ${props => props.isSC ? '#333 ' : '#fff'};
`
const Elem = styled.span`
`


const Standings = () => {
    const data = useStaticQuery(graphql`
        query {
            allTabelle {
                edges {
                    node {
                        GoalDiff
                        Goals
                        Draw
                        Points
                        ShortName
                        Won
                        Lost
                        Matches
                    }
                }
            }
        }
    `)
    return (
        <Wrapper>
            <WrapperInner>
            {   
                data.allTabelle.edges.map((edge, index) => {
                    return (
                        <Team style={index % 2 === 0 ? { backgroundColor: 'rgba(0,0,0,0.2)' } : null }
                            isSC={edge.node.ShortName === 'SC Freiburg'}
                        >
                            <Elem style={{ width: 109}}>
                                {index+1}. {edge.node.ShortName === 'RBL Leipzig' ? 'Leipzig' : edge.node.ShortName}
                            </Elem>
                            <Elem style={{ width: 70, textAlign: 'center'}}>{edge.node.Won} - {edge.node.Draw} - {edge.node.Lost}</Elem>
                            <Elem>{edge.node.Goals}:{edge.node.GoalDiff}</Elem>
                            <Elem>{edge.node.Points} Pkt.</Elem>
                        </Team>
                    )
                })
            }
            </WrapperInner>
        </Wrapper>
    )
}

export default Standings;