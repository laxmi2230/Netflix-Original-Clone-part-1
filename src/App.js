import React from 'react';
import "./App.css";
import Row from './Row';
import NavBar from './NavBar';
import Banner from './Banner';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTrending}/>
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
     {/* <Row title="ACTION MOVIES" />
      <Row title="COMEDY MOVIES" />
      <Row title="HORROR MOVIES" />
      <Row title="ROMANCE MOVIES" />
  <Row title="DOCUMENTARIES" /> */}
    </div>
  );
}

export default App;
