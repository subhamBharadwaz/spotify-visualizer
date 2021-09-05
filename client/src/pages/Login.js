import React from "react";

import { StyledHome } from "../styles";

const LOGIN_URI =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:8888/login"
    : "https://spotify-profile-visualizer.herokuapp.com/login";

const Login = () => (
  <StyledHome>
    <div className="container">
      <div className="content">
        <div className="phone">
          <figure className="frame frame-minimal-phone">
            <img
              src="https://www.scdn.co/i/free/screen_shot_taste_profile.jpg"
              alt="screenshot"
            />
          </figure>
        </div>
        <div className="info">
          <h1>
            View your Spotify's top artists, top tracks, playlists for free.
          </h1>
          <a href={LOGIN_URI}>Log in to Spotify</a>
        </div>
      </div>
    </div>
  </StyledHome>
);

export default Login;
