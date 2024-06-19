import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MovieList.css';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import Axios from 'axios'

const MovieInfoComponent = (props) => {
    const API_Key = "6589f825";
    const [movieInfo, setMovieInfo] = useState();
    const { selectedmovie } = props;

    useEffect(() => {
        Axios.get(
          `https://www.omdbapi.com/?i=${selectedmovie}&apikey=${API_Key}`,
        ).then((response) => setMovieInfo(response.data));
      }, [selectedmovie]);

  return (
    <Container fluid className='movieinfobox'>
        <Row className='rowBox' md={8}>
            <Col>
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={movieInfo?.Poster} className='img-fluid'/>
            </Card>
            </Col>
            <Col className='movieinfocontainer'>
            <p className='movieinfo'>{movieInfo?.Type}: <span>{movieInfo?.Title}</span></p>
            <p className='movieinfo'> IMDB Rating: <span>{movieInfo?.imdbRating}</span></p>
            <p className='movieinfo'>Year: <span>{movieInfo?.Year}</span></p>
            <p className='movieinfo'>Language: <span>{movieInfo?.Language}</span></p>
            <p className='movieinfo'>Rated: <span>{movieInfo?.Rated}</span></p>
            <p className='movieinfo'>Released: <span>{movieInfo?.Released}</span></p>
            <p className='movieinfo'>Runtime: <span>{movieInfo?.Runtime}</span></p>
            <p className='movieinfo'>Director: <span>{movieInfo?.Director}</span></p>
            <p className='movieinfo'>Actors: <span>{movieInfo?.Actors}</span></p>
            </Col>
            <Col className='CloseBtn'><button onClick={()=>props.onselectedMovie('')}>X</button></Col>
        </Row>
    </Container>
  )
}

export default MovieInfoComponent