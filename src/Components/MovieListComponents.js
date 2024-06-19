import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MovieList.css';


const MovieListComponents = (props) => {
    const { Title, Year, imdbID, Type, Poster } = props.movie;
  return (

    <Row>
        <Col  className='moviecontainer'>
            <Card style={{ width: '16rem' }} onClick={()=>{props.onselectedMovie(imdbID)}}>
            <Card.Img variant="top" src={Poster} className='cardImg'/>
            <Card.Body>
            <Card.Title className='movieName'>{Title}</Card.Title>
            <Card.Text>
                <Row>
                <Col className='movieInfo'>Year: {Year}</Col>
                <Col className='movieInfo'>Type: {Type}</Col>
                </Row>
            </Card.Text>
            </Card.Body>
            </Card>
        </Col>
  </Row>
  )
}

export default MovieListComponents