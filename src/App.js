import Axios from 'axios'
import { useState } from 'react';
import './App.css';
import HeaderComponents from './Components/HeaderComponents';
import MovieListComponents from './Components/MovieListComponents';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MovieInfoComponent from './Components/MovieInfoComponent';

function App() {

  const API_Key = "6589f825";


  const [movielist, setMovielist] = useState([])
  const [searchquery, setSearchQueary] = useState([])
  const [timeoutId, updateTimeoutId] = useState();
  const [selectedmovie, onselectedMovie] = useState();

  const fetchdata = async (searchstring) =>{
    const response = await Axios.get(`https://www.omdbapi.com/?s=${searchstring}&apikey=${API_Key}`);
    setMovielist(response.data.Search)

  }

  const onTextChange = (e) =>{
    onselectedMovie("")
    clearTimeout(timeoutId)
    setSearchQueary(e.target.value)
    const timeout = setTimeout(()=> fetchdata(e.target.value),500);
    updateTimeoutId(timeout);
  }
  
  return (
    <div className="App">
      <HeaderComponents 
      onTextChange = {onTextChange}
      searchquery = {searchquery}
      />
      {selectedmovie && <MovieInfoComponent selectedmovie={selectedmovie} onselectedMovie={onselectedMovie}/>}
      <Container fluid className='containerBox'>
      {movielist?.length ? 
      (
        <Row xs={1} md={4} className="g-2">{
        movielist.map((movie)=>(
          <Col>
          <MovieListComponents 
          movie={movie}
          onselectedMovie={onselectedMovie}
          />
          </Col>
        ))
      }</Row>):( <h1>
        No Search
      </h1>)}
      </Container>
    </div>
  );
}

export default App;
