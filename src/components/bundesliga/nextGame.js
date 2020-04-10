import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

const Wrapper = styled.section`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    background: #A31602;
    color: #fff;
    text-align: center;
`
const H1 = styled.h1`
    font-size: 1.4em;
    margin: 0;
    padding: 20px 0 5px 0;
    box-sizing: border-box;
    text-transform: uppercase;
    border-bottom: dashed 2px #fff;
    display: inline-block;
`
const H2 = styled.h2`
    margin: 0;
    font-size: 1.3em;
    color: #ddd;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
`
const Teams = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 700px;
    margin: auto;
    padding-top: 20px;
    box-sizing: border-box; 
`
const LogoOuter = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 110px;
    border: dashed 2px #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 550px) {
        width: 140px;
        height: 140px;
        border-radius: 70px;
    }
`
const Logo = styled.img`
    width: 100px;
    height: auto;
    @media (max-width: 550px) {
        width: 70px;
        height: auto;
    }
`
const Team = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const TeamName = styled.span`
    display: inline-block;
    padding: 5px 10px;
    border-bottom: dashed 2px #fff;
    box-sizing: border-box;
    margin: 10px;
    color: #fff;
    font-size: 1.5em;
    text-transform: uppercase;
    @media (max-width: 550px) {
        font-size: 1.2em;
    }
`
const Date = styled.span`
    color: #fff;
    padding: 20px;
    display: inline-block;
    font-size: 1.5em;
`

const NextGame = () => {
    const data = useStaticQuery(graphql`
        query {
            nextGame {
                LeagueName
                MatchDateTime
                Team1 {
                    ShortName
                    TeamIconUrl
                }
                Team2 {
                    ShortName
                    TeamIconUrl
                }
                Group {
                    GroupName
                }
            }
        }
    `)
    return (
        <Wrapper>
            <H1>{ data.nextGame.LeagueName }</H1>
            <H2>{ data.nextGame.Group.GroupName }</H2>
            <Teams>
                <Team>
                    <LogoOuter>
                        <Logo src={data.nextGame.Team1.TeamIconUrl} alt={data.nextGame.Team1.ShortName} />
                    </LogoOuter>
                    <TeamName>{data.nextGame.Team1.ShortName}</TeamName>
                </Team>
                <Team>
                    <LogoOuter>
                        <Logo src={data.nextGame.Team2.TeamIconUrl} alt={data.nextGame.Team2.ShortName} />
                    </LogoOuter>
                    <TeamName>{data.nextGame.Team2.ShortName}</TeamName>
                </Team>
            </Teams>
            <Date>{moment(data.nextGame.MatchDateTime).format('DD.MM.YYYY - HH:mm (ddd)')}</Date>
        </Wrapper>
    )
}

export default NextGame;