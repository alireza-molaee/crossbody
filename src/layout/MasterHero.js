import React, { Component } from 'react'

export default class MasterHero extends Component {
  render() {
    return (
        <section className="hero-wrap js-fullheight">
        <div className="overlay" style={{backgroundImage: 'url(images/bg_2.jpg)'}} data-stellar-background-ratio="0.5" />
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-end">
            <h3 className="v">
              <a href="https://vimeo.com/45830194" className="popup-vimeo">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-play" />
                </div>
                <span>Crossfit Workout Harder</span> <br />Watch Our Video</a>
            </h3>
            <div className="col-md-12 text-center ftco-animate">
              <h1 className="mt-5" style={{backgroundImage: 'url(images/bg_1.jpg)'}} data-stellar-background-ratio="0.5">Cross<br />Body</h1>
              <h2>Crossfit. Working Harder</h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
