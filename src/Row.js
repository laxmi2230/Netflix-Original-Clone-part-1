import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import axios from './axios';
import './Row.css';

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies]=useState([]);
    const [trailerUrl, setTrailerUrl]= useState("");

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };

    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
      fetchData();
    }, [fetchUrl]);

    const handleClick = async (movie) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        let trailerurl = await axios.get(
          `/movie/${movie.id}/videos?api_key=b36d7e6d1bdd43e4e51e00299a625f58`
        );
        setTrailerUrl(trailerurl.data.results[0]?.key);
      }
    };
  

    return (
    <div className="row">
      <h2>{title}</h2>
      
     <div className="row_posters">
        {movies.map(movie => (
            <img className={`row_poster ${isLargeRow && "row_posterLarge"}`} key={movie.id} src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name} onClick={() => handleClick(movie)} />
        ))}
     </div> 
    {trailerUrl && <YouTube videoId={trailerUrl}  opts={opts} /> }
    </div>
    );
}


export default Row;