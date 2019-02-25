import React, { Component } from 'react';
import NavBar from '../../layout/NavBar';
import MasterHero from '../../layout/MasterHero';
import Footer from '../../layout/Footer';
import Features from './components/Features';
import Counter from './components/Counter';
import BestTrainer from './components/BestTrainer';
import Testimonial from './components/Testimonial';
import LastArticle from './components/LastArticle';
import Gallery from './components/Gallery';
import LastTrainers from './components/LastTrainers';

export default class index extends Component {

  render() {
    return (
      <>
    <NavBar />
    <MasterHero />
    <LastTrainers />
    <Features />
    <Counter />
    <BestTrainer />
    <Testimonial />
    <LastArticle />
    <Gallery />
  <Footer />
      </>
    )
  }
}
