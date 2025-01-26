import React from 'react';
import backwardIcon from './assets/backward_icon.png';
import forwardIcon from './assets/forward_icon.png';
import libraryIcon from './assets/library_icon.png';
import card1img from './assets/card1img.jpeg';
import card2img from './assets/card2img.jpeg';
import card3img from './assets/card3img.jpeg';
import card4img from './assets/card4img.jpeg';
import card5img from './assets/card5img.jpeg';
import card6img from './assets/card6img.jpeg';
import logo from './assets/logo.png';
import  "./App.css";

function App() {
  return (
    <div className="main">
      <div className="sidebar">
        <div className="nav">
          <div className="nav-option" style={{ opacity: 1 }}>
            <i className="fa-solid fa-house"></i>
            <a href="#">Home</a>
          </div>
          <div className="nav-option">
            <i className="fa-solid fa-magnifying-glass"></i>
            <a href="#">Search</a>
          </div>
        </div>

        <div className="library">
          <div className="options">
            <div className="lib-option nav-option">
              <img src={libraryIcon} alt="Library Icon" />
              <a href="#">Your Library</a>
            </div>
            <div className="icons">
              <i className="fa-solid fa-plus"></i>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>

          <div className="boxes">
            <div className="box">
              <p className="box-p1">Create your first playlist</p>
              <p className="box-p2">It's easy, we'll help you</p>
              <button className="badge">Create playlist</button>
            </div>
            <div className="box">
              <p className="box-p1">Let's find some podcasts to follow</p>
              <p className="box-p2">We'll keep you updated on new episodes</p>
              <button className="badge">Browse podcasts</button>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="sticky-nav">
          <div className="sticky-nav-icons">
            <img src={backwardIcon} alt="Backward Icon" />
            <img src={forwardIcon} alt="Forward Icon" className="hide" />
          </div>

          <div className="sticky-nav-options">
            <button className="badge nav-item hide">Explore Premium</button>
            <button className="badge nav-item dark-badge">
              <i className="fa-regular fa-circle-down" style={{ marginRight: '5px' }}></i>Install App
            </button>
            <i className="fa-regular fa-user nav-item"></i>
          </div>
        </div>

        <h2>Recently Played</h2>
        <div className="cards-container">
          <div className="card">
            <img src={card1img} className="card-image" alt="Card 1" />
            <p className="card-title">Top 50- Global</p>
            <p className="card-info">Your daily updates of the most played tracks...</p>
          </div>
        </div>

        <h2>Trending now near you</h2>
        <div className="cards-container">
          <div className="card">
            <img src={card2img} className="card-image" alt="Card 2" />
            <p className="card-title">Top 50- Global</p>
            <p className="card-info">Your daily updates of the most played tracks...</p>
          </div>

          <div className="card">
            <img src={card3img} className="card-image" alt="Card 3" />
            <p className="card-title">Top 50- Global</p>
            <p className="card-info">Your daily updates of the most played tracks...</p>
          </div>

          <div className="card">
            <img src={card4img} className="card-image" alt="Card 4" />
            <p className="card-title">Top 50- Global</p>
            <p className="card-info">Your daily updates of the most played tracks...</p>
          </div>

          <div className="card">
            <img src={card3img} className="card-image" alt="Card 3" />
            <p className="card-title">Top 50- Global</p>
            <p className="card-info">Your daily updates of the most played tracks...</p>
          </div>

          <div className="card">
            <img src={card4img} className="card-image" alt="Card 4" />
            <p className="card-title">Top 50- Global</p>
            <p className="card-info">Your daily updates of the most played tracks...</p>
          </div>
        </div>

        <h2>Featured Charts</h2>
        <div className="cards-container">
          <div className="card">
            <img src={card5img} className="card-image" alt="Card 5" />
            <p className="card-title">Top 50- Global</p>
            <p className="card-info">Your daily updates of the most played tracks...</p>
          </div>
          <div className="card">
            <img src={card6img} className="card-image" alt="Card 6" />
            <p className="card-title">Top 50- Global</p>
            <p className="card-info">Your daily updates of the most played tracks...</p>
          </div>
          <div className="card">
            <img src={card1img} className="card-image" alt="Card 1" />
            <p className="card-title">Top 50- Global</p>
            <p className="card-info">Your daily updates of the most played tracks...</p>
          </div>
        </div>

        <div className="footer">
          <div className="line"></div>
        </div>
      </div>

      <div className="music-player"></div>
    </div>
  );
}

export default App;