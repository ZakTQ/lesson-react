import './App.css';
import React from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />

      <div className='content'>
        <div className='content-img'>
          <img src="http://betafinance.ru/sites/default/files/news/b655c76706b606569ff3d1a1f4ce04e6.jpg" alt="" />
        </div>

        <div>
          <div>
            ava+description
          </div>

          <div>
            My posts

            <div>
              new post
            </div>

            <div>
              <ul>
                <li>post1</li>
                <li>post1</li>
                <li>post1</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
