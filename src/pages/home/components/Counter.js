import React from 'react'

export default function Counter() {
  return (
    <section className="ftco-counter ftco-bg-dark img" id="section-counter" style={{backgroundImage: 'url(images/bg_2.jpg)'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={5000}>0</strong>
                  <span>Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={4560}>0</strong>
                  <span>Perfect Bodies</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={570}>0</strong>
                  <span>Working Hours</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
              <div className="block-18 text-center">
                <div className="text">
                  <strong className="number" data-number={900}>0</strong>
                  <span>Success Stories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
