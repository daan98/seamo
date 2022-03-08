/* import axios from 'axios';
import React, { useEffect, useState } from "react";
import Movies from './Movies';

function FetchData(){
    const [ movies, setMovies ] = useState([]);

    useEffect(() =>  {
        axios.get('http://localhost:3001/movie')
        .then( res => {
            console.log(res);
        }).catch(err => console.log(err))
    }, [])
    return(
        <div>
            <Movies/>
        </div>
    );
}

export default FetchData; */