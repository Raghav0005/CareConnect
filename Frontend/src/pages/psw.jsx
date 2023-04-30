import React, { Component } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './psw.css';

export const ListPsw = () => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <div>
      <h1>People Support Worker Directory - Currently Avaliable Workers </h1>
      <p>Here are some of our lovely PSWs who currently are avaliable to help you! Feel free to read their biographies and contact them!</p>
    <Carousel responsive={responsive}>
      <div className="card">
          <img className="product--image" src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png" alt="man profile picture" />
          <h2>John Smith</h2>
          <p className="price">Etobicoke</p>
          <p>John is a passionate foodie from Etobicoke, who's fluent in English, French and Mandarin!...</p>
          <p>
            <button>Contact John!</button>
          </p>
        </div>

    <div className="card">
          <img className="product--image" src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png" alt="man profile picture" />
          <h2>Tom Hanks</h2>
          <p className="price">Etobicoke</p>
          <p>Tom is a PSW from Brampton, who loves a good weekend of fishing and hiking. Fluent in English, Spanish and Gaelic, Tom tries to make his patients smile!...</p>
          <p>
            <button>Contact Tom!</button>
          </p>
        </div>


    <div className="card">
          <img className="product--image" src="https://cdn-icons-png.flaticon.com/512/6833/6833605.png" />
          <h2>Mary Smith</h2>
          <p className="price">Vaughan</p>
          <p>Mary is a avid soccer fan who's fluent in Italian and loves Italian cooking!</p>
          <p>
            <button>Contact Mary!</button>
          </p>
        </div>


    <div className="card">
          <img className="product--image" src="https://cdn-icons-png.flaticon.com/512/6833/6833605.png" />
          <h2>Anita Patel</h2>
          <p className="price">Vaughan</p>
          <p>Anita is a fluent Hindi and Gujurati speaker who loves wrestling and working out. </p>
          <p>
            <button>Contact Anita!</button>
          </p>
        </div>


    <div className="card">
          <img className="product--image" src="https://cdn0.iconfinder.com/data/icons/social-media-network-4/48/male_avatar-512.png" alt="man profile picture" />
          <h2>Thomas Brown</h2>
          <p className="price">Scarborough</p>
          <p>Thomas (or as all his friends call him, T) is a avid basketball fan and loves playing Super Smash Bros. in his free time. He speaks English and Russian.</p>
          <p>
            <button>Contact Thomas!</button>
          </p>
        </div>

      </Carousel>
      </div>

  );
}