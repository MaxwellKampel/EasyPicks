import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MatchTable from '../components/SportTable';
import Baseball from '../assets/Icons/baseball-player(1).png';
import Soccer from '../assets/Icons/football-player(1).png';
import Basketball from '../assets/Icons/basketball-player(1).png';
import MMA from '../assets/Icons/boxer(1).png';
import Hockey from '../assets/Icons/hockey-player(1).png';
import Football from '../assets/Icons/american-football-player(1).png';
import Hero from '../assets/HeroImages/florian-muller-wbaH51ObNgE-unsplash.jpg';
import dotenv from 'dotenv';



const APIKEY = import.meta.env.VITE_APIKEY


const Home = (props) => {
    

const [todayGames, setTodayGames] = useState([])

useEffect(() => {

    // let axios = require('axios');

    let config = {
      method: 'get',
      url: 'https://v1.baseball.api-sports.io/games?date=2024-05-24&league=1&season=2024&timezone=America/New_York',
      headers: {
        'x-rapidapi-key': APIKEY,
        'x-rapidapi-host': 'v1.baseball.api-sports.io'
      }
    };
    
    axios(config)
    .then(function (response) {
      setTodayGames(response.data.response);
    })
    .catch(function (error) {
      console.log(error);
    });

}, [])


    return (
        <main>
            <div className='heroImage'>
                <img src={Hero} alt="" />
                <h1>Get the Stats to fuel your best picks</h1>
                <h5>Find specific stats  based on the games you're interested in and the average odds that could win you the most money</h5>
            </div>
            <div className='sportListing'>
                <div className='sportBlock'>
                    <img className='icon' src={Baseball} alt="" />
                    <Link to={"/baseball"} className='navButton'>
                        Baseball
                    </Link>
                </div>
                <div className='sportBlock'>
                    <img className='icon' src={Basketball} alt="" />
                    <Link to={"/baseball"} className='navButton'>
                        Basketball
                    </Link>
                </div>
                <div className='sportBlock'>
                    <img className='icon' src={Football} alt="" />
                    <Link to={"/baseball"} className='navButton'>
                        Football
                    </Link>            </div>
                <div className='sportBlock'>
                    <img className='icon' src={Soccer} alt="" />
                    <Link to={"/baseball"} className='navButton'>
                        Soccer
                    </Link>            </div>
                <div className='sportBlock'>
                    <img className='icon' src={MMA} alt="" />
                    <Link to={"/baseball"} className='navButton'>
                        MMA
                    </Link>            </div>
                <div className='sportBlock'>
                    <img className='icon' src={Hockey} alt="" />
                    <Link to={"/baseball"} className='navButton'>
                    Hockey
                    </Link>            </div>
            </div>
            <MatchTable tableName = "Today's Matches" head1= "Start Time"  data={todayGames}/>
        </main>
    )
}

export default Home