import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MatchTable from '../components/SportTable';
import Hero from '../assets/HeroImages/Baseball_Hero.jpg';
import ResultTable from '../components/ResultTable';

// 3 useStates - GET three match tables
import dotenv from 'dotenv';



const APIKEY = import.meta.env.VITE_APIKEY

const Sport = (props) => {

    const [todayGames, setTodayGames] = useState(null)
    const [prevGames, setPrevGames] = useState(null)


    useEffect(() => {
    
        // let axios = require('axios');
    
        let config1 = {
          method: 'get',
          url: 'https://v1.baseball.api-sports.io/games?date=2024-05-24&league=1&season=2024&timezone=America/New_York',
          headers: {
            'x-rapidapi-key': APIKEY,
            'x-rapidapi-host': 'v1.baseball.api-sports.io'
          }
        };

        let config2 = {
            method: 'get',
            url: 'https://v1.baseball.api-sports.io/games?date=2024-05-23&league=1&season=2024&timezone=America/New_York',
            headers: {
              'x-rapidapi-key': APIKEY,
              'x-rapidapi-host': 'v1.baseball.api-sports.io'
            }
          };


        
        axios(config1)
        .then(function (response) {
          setTodayGames(response.data.response);
        })
        .catch(function (error) {
          console.log(error);
        });

        axios(config2)
        .then(function (response) {
          setPrevGames(response.data.response);
        })
        .catch(function (error) {
          console.log(error);
        });
    
    }, [])




    return (
        <div>
        {todayGames &&
        <div>
            <div className='heroImage'>
                <img src={Hero} alt="" />
                <h1>Knock your next pic out of the park!</h1>
            </div>
            <MatchTable tableName = "Today's Matches" head1= "Start Time"  data={todayGames}/>
            <ResultTable tableName = "Yesterday's Results" head1= "Result" data={prevGames} />
            {/* <MatchTable tableName = "Match Results" head1= "Result" col1 = "Braves" /> */}

            </div>
        }
        </div>
            
    )
}

export default Sport