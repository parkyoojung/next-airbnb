import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className='max-w-7xl my-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-15'>Explore Nearby</h2>
          {/* API */}
          <div >
           <SmallCard />
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div >
            <MediumCard />
          </div>
        </section>
        <LargeCard />
      </main>
      <Footer />
    </div>
  )
}