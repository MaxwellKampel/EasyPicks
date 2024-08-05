import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VictoryPie, VictoryChart, VictoryContainer, VictoryLegend, VictoryLabel } from 'victory';
import Hero from '../assets/HeroImages/Baseball_Match.jpg';
import GameTable from '../components/GameTable';
import dotenv from 'dotenv';



const APIKEY = import.meta.env.VITE_APIKEY


const Match = (props) => {

    const { id } = useParams();
    const [match, setMatch] = useState(null);

    useEffect(() => {
    
        // let axios = require('axios');
    
        let config = {
          method: 'get',
          url: `https://v1.baseball.api-sports.io/games?id=${id}&league=1&season=2024&timezone=America/New_York`,
          headers: {
            'x-rapidapi-key': APIKEY,
            'x-rapidapi-host': 'v1.baseball.api-sports.io'
          }
        };
        
        axios(config)
        .then(function (response) {
          setMatch(response.data.response[0]);
        })
        .catch(function (error) {
          console.log(error);
        });
    
    }, [id])




    return (
        <div>
            {match &&
            <div>
            <div className='heroImage'>
                <img src={Hero} alt="" />
                <h1>Braves
                    <span style={{ display: "block" }}>
                        <span style={{ fontSize: "24px" }}>@
                        </span>Cardinals</span>
                </h1>
                <div className='MatchUp'>
                    <img src={match.teams.away.logo} alt="" />
                    <p>vs</p>
                    <img src={match.teams.home.logo} alt="" />
                </div>
            </div>
            <GameTable tableName = {match.status.long} data = {match.scores}/>
            <div className='Stats'>
                <h3>Team Statistics</h3>
                <div className='graphStat'>
                    <h4>Games Won</h4>
                    <div style={{ display: 'flex', width: '100%', margin: "0 auto" }}>
                        <div>
                            <VictoryLabel text="102 Wins" style={[{ fontSize: 20 }]} padding={0} />
                            <VictoryPie
                                name='At Home'
                                colorScale={["#5fc314", "#107c10"]}
                                innerRadius={100}
                                padding={25}

                                data={[
                                    { x: "48", y: 48 },
                                    { x: "54", y: 54 }
                                ]}
                                labelRadius={({ innerRadius }) => innerRadius + 10}
                                style={{ labels: { fill: "white", fontSize: 42, fontWeight: 600 }, data: { height: 150 } }}
                            />
                        </div>
                        <div>
                            <VictoryLabel text="82 Wins" style={[{ fontSize: 20 }]} />
                            <VictoryPie
                                name={"On the Road"}
                                padding={25}
                                colorScale={["#5fc314", "#107c10"]}
                                innerRadius={100}
                                data={[
                                    { x: "38", y: 38 },
                                    { x: "44", y: 44 }
                                ]}
                                labelRadius={({ innerRadius }) => innerRadius + 10}
                                style={{ labels: { fill: "white", fontSize: 42, fontWeight: 600 } }}
                            />
                        </div>
                    </div>
                    <VictoryLegend
                        x={100} y={0}
                        centerTitle
                        orientation='horizontal'
                        data={[{ name: '@Home', symbol: { fill: "#107c10" } }, { name: '@Away', symbol: { fill: "#80fb1d" } }]}
                        style={{ labels: { fill: 'white', fontSize: 24, fontWeight: 700 }, title: { fill: 'white' } }}
                        width={500}
                        height={50}
                        gutter={50}
                    />
                </div>
                <div className='graphStat'>
                    <h4>Games Lost</h4>
                    <div style={{ display: 'flex', width: '100%', margin: "0 auto" }}>
                        <div>
                            <VictoryLabel text="62 Loses" style={[{ fontSize: 20 }]} />
                            <VictoryPie
                                name='At Home'
                                colorScale={["#5fc314", "#107c10"]}
                                innerRadius={100}
                                padding={25}

                                data={[
                                    { x: "24", y: 24 },
                                    { x: "38", y: 38 }
                                ]}
                                labelRadius={({ innerRadius }) => innerRadius + 10}
                                style={{ labels: { fill: "white", fontSize: 42, fontWeight: 600 }, data: { height: 150 } }}
                            />
                        </div>
                        <div>
                            <VictoryLabel text="84 Loses" style={[{ fontSize: 20 }]} />
                            <VictoryPie
                                name={"On the Road"}
                                padding={25}
                                colorScale={["#5fc314", "#107c10"]}
                                innerRadius={100}
                                data={[
                                    { x: "40", y: 40 },
                                    { x: "44", y: 44 }
                                ]}
                                labelRadius={({ innerRadius }) => innerRadius + 10}
                                style={{ labels: { fill: "white", fontSize: 42, fontWeight: 600 } }}
                            />
                        </div>
                    </div>
                    <VictoryLegend
                        x={100} y={0}
                        centerTitle
                        orientation='horizontal'
                        data={[{ name: '@Home', symbol: { fill: "#107c10" } }, { name: '@Away', symbol: { fill: "#80fb1d" } }]}
                        style={{ labels: { fill: 'white', fontSize: 24, fontWeight: 700 }, title: { fill: 'white' } }}
                        width={500}
                        height={50}
                        gutter={50}
                    />
                </div>
                <div className='graphStat'>
                    <h4>Runs / Points For</h4>
                    <div style={{ display: 'flex', width: '100%', margin: "0 auto" }}>
                        <div>
                            <VictoryLabel text="411 Scored" style={[{ fontSize: 20 }]} />
                            <VictoryPie
                                name='At Home'
                                colorScale={["#5fc314", "#107c10"]}
                                innerRadius={100}
                                padding={25}

                                data={[
                                    { x: "220", y: 220 },
                                    { x: "191", y: 191 }
                                ]}
                                labelRadius={({ innerRadius }) => innerRadius + 10}
                                style={{ labels: { fill: "white", fontSize: 42, fontWeight: 600 }, data: { height: 150 } }}
                            />
                        </div>
                        <div>
                            <VictoryLabel text="330 Scored" style={[{ fontSize: 20 }]} />
                            <VictoryPie
                                name={"On the Road"}
                                padding={25}
                                colorScale={["#5fc314", "#107c10"]}
                                innerRadius={100}
                                data={[
                                    { x: "143", y: 143 },
                                    { x: "187", y: 187 }
                                ]}
                                labelRadius={({ innerRadius }) => innerRadius + 10}
                                style={{ labels: { fill: "white", fontSize: 42, fontWeight: 600 } }}
                            />
                        </div>
                    </div>
                    <VictoryLegend
                        x={100} y={0}
                        centerTitle
                        orientation='horizontal'
                        data={[{ name: '@Home', symbol: { fill: "#107c10" } }, { name: '@Away', symbol: { fill: "#80fb1d" } }]}
                        style={{ labels: { fill: 'white', fontSize: 24, fontWeight: 700 }, title: { fill: 'white' } }}
                        width={500}
                        height={50}
                        gutter={50}
                    />
                </div>
                <div className='graphStat'>
                    <h4>Runs / Points Against</h4>
                    <div style={{ display: 'flex', width: '100%', margin: "0 auto" }}>
                        <div>
                            <VictoryLabel text="337 Scored" style={[{ fontSize: 20 }]} />
                            <VictoryPie
                                name='At Home'
                                colorScale={["#5fc314", "#107c10"]}
                                innerRadius={100}
                                padding={25}

                                data={[
                                    { x: "158", y: 158 },
                                    { x: "179", y: 179 }
                                ]}
                                labelRadius={({ innerRadius }) => innerRadius + 10}
                                style={{ labels: { fill: "white", fontSize: 42, fontWeight: 600 }, data: { height: 150 } }}
                            />
                        </div>
                        <div>
                            <VictoryLabel text="338 Scored" style={[{ fontSize: 20 }]} />
                            <VictoryPie
                                name={"On the Road"}
                                padding={25}
                                colorScale={["#5fc314", "#107c10"]}
                                innerRadius={100}
                                data={[
                                    { x: "148", y: 148 },
                                    { x: "190", y: 190 }
                                ]}
                                labelRadius={({ innerRadius }) => innerRadius + 10}
                                style={{ labels: { fill: "white", fontSize: 42, fontWeight: 600 } }}
                            />
                        </div>
                    </div>
                    <VictoryLegend
                        x={100} y={0}
                        centerTitle
                        orientation='horizontal'
                        data={[{ name: '@Home', symbol: { fill: "#107c10" } }, { name: '@Away', symbol: { fill: "#80fb1d" } }]}
                        style={{ labels: { fill: 'white', fontSize: 24, fontWeight: 700 }, title: { fill: 'white' } }}
                        width={500}
                        height={50}
                        gutter={50}
                    />
                </div>
            </div> 
            </div>}
        </div>
    )
}

export default Match


// Sample Data for get: games
// {
// id: 153982
// date: "2024-05-23T22:40:00+00:00"
// time: "22:40"
// timestamp: 1716504000
// timezone: "UTC"
// week: null
// status: {
// long: "Inning 9"
// short: "IN9"
// }
// country: {
// id: 1
// name: "USA"
// code: "US"
// flag: "https://media.api-sports.io/flags/us.svg"
// }
// league: {
// id: 1
// name: "MLB"
// type: "League"
// logo: "https://media.api-sports.io/baseball/leagues/1.png"
// season: 2024
// }
// teams: {
// home: {
// id: 12
// name: "Detroit Tigers"
// logo: "https://media.api-sports.io/baseball/teams/12.png"
// }
// away: {
// id: 36
// name: "Toronto Blue Jays"
// logo: "https://media.api-sports.io/baseball/teams/36.png"
// }
// }
// scores: {
// home: {
// hits: 5
// errors: 0
// innings: {
// 1: 0
// 2: 0
// 3: 0
// 4: 0
// 5: 0
// 6: 1
// 7: 0
// 8: 0
// 9: 0
// extra: null
// }
// total: 1
// }
// away: {
// hits: 13
// errors: 0
// innings: {
// 1: 0
// 2: 0
// 3: 1
// 4: 0
// 5: 0
// 6: 0
// 7: 2
// 8: 3
// 9: 3
// extra: null
// }
// total: 9
// }
// }
// }
// {
// id: 153983
// date: "2024-05-23T23:40:00+00:00"
// time: "23:40"
// timestamp: 1716507600
// timezone: "UTC"
// week: null
// status: {
// long: "Inning 9"
// short: "IN9"
// }
// country: {
// id: 1
// name: "USA"
// code: "US"
// flag: "https://media.api-sports.io/flags/us.svg"
// }
// league: {
// id: 1
// name: "MLB"
// type: "League"
// logo: "https://media.api-sports.io/baseball/leagues/1.png"
// season: 2024
// }
// teams: {
// home: {
// id: 7
// name: "Chicago White Sox"
// logo: "https://media.api-sports.io/baseball/teams/7.png"
// }
// away: {
// id: 4
// name: "Baltimore Orioles"
// logo: "https://media.api-sports.io/baseball/teams/4.png"
// }
// }
// scores: {
// home: {
// hits: 6
// errors: 0
// innings: {
// 1: 1
// 2: 0
// 3: 1
// 4: 0
// 5: 0
// 6: 0
// 7: 0
// 8: 0
// 9: 2
// extra: null
// }
// total: 4
// }
// away: {
// hits: 13
// errors: 0
// innings: {
// 1: 0
// 2: 0
// 3: 1
// 4: 4
// 5: 0
// 6: 3
// 7: 0
// 8: 0
// 9: 0
// extra: null
// }
// total: 8
// }
// }
// }
// ]
// }