import React from 'react'

export default function LastArticle() {
  return (
    <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 heading-section text-center ftco-animate">
          <span className="subheading">
            <i className="db-left" />
            Read Articles 
            <i className="db-right" />
          </span>
          <h2 className="mb-3">Recent Blog</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-lg-4 d-flex ftco-animate">
          <div className="blog-entry align-self-stretch">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
            </a>
            <div className="text py-4 d-flex">
              <div className="meta text-center">
                <span className="day">04</span>
                <span className="mos">January</span>
                <span className="yr">2019</span>
              </div>
              <div className="desc">
                <h3 className="heading mt-2"><a href="#">Crossfit Harder Workout</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex ftco-animate">
          <div className="blog-entry align-self-stretch">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
            </a>
            <div className="text py-4 d-flex">
              <div className="meta text-center">
                <span className="day">03</span>
                <span className="mos">January</span>
                <span className="yr">2019</span>
              </div>
              <div className="desc">
                <h3 className="heading mt-2"><a href="#">Crossfit Harder Workout</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex ftco-animate">
          <div className="blog-entry align-self-stretch">
            <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
            </a>
            <div className="text py-4 d-flex">
              <div className="meta text-center">
                <span className="day">02</span>
                <span className="mos">January</span>
                <span className="yr">2019</span>
              </div>
              <div className="desc">
                <h3 className="heading mt-2"><a href="#">Crossfit Harder Workout</a></h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
