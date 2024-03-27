import React from 'react'
import UserInfo from '../components/UserInfo'

const Home = () => {
  return (
    <main className='restaurant-container'>
      <section className='restaurant-banner'>
        <div>
          <h1>Pizza Walla</h1>
         <h2>Find the best restaurants, cafés and bars in India</h2>
        </div>
      </section>
      <section>
        <h1 className='heading'>Restaurant Visit Form</h1>
          <UserInfo />
       </section>
    </main>
  )
}

export default Home