import React from 'react'
import UserInfoForm from '../forms/UserInfoForm';

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
         <UserInfoForm/> 
      </section>
    </main>
  )
}

export default Home