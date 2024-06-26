import {useEffect, useState} from "react";
import MovieCard from "./components/MovieCard";
import "./css/App.css"
import SearchIcon from "./images/search.svg"

const API_URL = 'http://www.omdbapi.com?apikey=322e0ce1';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('Superman');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);

        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        
        searchMovies('superman')

       },[])

    return(
        <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
                <input 
                placeholder="Search For Movies"
                value={searchTerm}
                onChange={(e) => 
                    setSearchTerm(e.target.value)
                }
                />

                <img 
                src={SearchIcon}
                alt="Search-Icon"
                onClick={() => 
                    searchMovies(searchTerm)
                }
                />

            </div>

            {
                movies?.length > 0
                 ? (
                    <div className="container">

                        {movies.map((movie) => (
                            <MovieCard movie={movie}/>
                        ))}

                    </div>
                 )
                 : (
                    <div className="empty">

                       <h2>No Movies Found</h2>

                    </div>
                 )
            }

        </div>
    )
}

export default App;