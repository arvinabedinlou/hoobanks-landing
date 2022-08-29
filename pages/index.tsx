import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Billing from '../comps/Billing'
import Business from '../comps/Business'
import CardDeal from '../comps/CardDeal'
import Clients from '../comps/Clients'
import CTA from '../comps/CTA'
import Footer from '../comps/Footer'
import Hero from '../comps/Hero'
import Navbar from '../comps/Navbar'
import Stats from '../comps/Stats'
import Testimonials from '../comps/Testimonials'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary flex justify-center items-start`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-primary sm:py-16 py-6 flex justify-center items-center`}
      >
        <div className={`xl:max-w-[1280px] w-full`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home
