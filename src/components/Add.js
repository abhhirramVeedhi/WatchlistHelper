import React  ,  {useState} from 'react';
import ResultCard from './ResultCard';


export const Add = () => {

  const [query,setQuery] = useState('');//query is set to empty
  const [results,setResults] = useState([]);
  const QueryChange = e =>{
    e.preventDefault();

    setQuery(e.target.value);//value will be updated in search input

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.React_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )//retrive movie data from TMDB
    .then(res => res.json())
    .then(data =>{
      if(!data.errors){
        setResults(data.results);
      }else{
        setResults([]);
      }
    });
  };

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input type='text' //controlled by the query state
            placeholder='search for movie' 
              value={query}
              onChange={QueryChange}
            />
          </div>
          {results.lenght > 0 && (
            <ul className='results'>
              {results.map((movie)=>(
                <li key={movie.id}>
                  <ResultCard movie={movie} /> 
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Add
