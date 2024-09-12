import React from 'react';
import logo from './logo.svg';
import bannerImg from './banner_img.png';
import Image from './image.jpg';
import './App.css';
import styles from './SchoolLevels.module.css';
import styles from './Statistics.module.css';


function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <MyComponent />
      <InfoSection />
    </div>
  );
}

const Header = () => {
  return (
    <div className='container-fluid'>
      <div className='row pb-0' style={{ backgroundColor: '#bea8e1', color: 'black', padding: '1rem' }}>
        <div className='col-1'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className='col-2'>
          <h1 className='mt-2'>ABC School</h1>
        </div>
        <div className='col-6 mx-5'></div>
        <div className='col-2'>
          <div className='row'>
            <button className="btn" style={{ backgroundColor: '#140c73', color: 'white' }}>Contact Us</button>
          </div>
          <p className='mt-2 mx-9'>(011) 22345567</p>
        </div>
      </div>
    </div>
  );
}

const NavBar = () => {
  return (
    <nav className="navbar pb-2 pt-4">
      <ul className="navbar-list">
        <li className='mx-5'><a href="#">Home</a></li>
        <li className='mx-5'><a href="#">Course Details</a></li>
        <li className='mx-5'><a href="#">Student Bio</a></li>
        <li className='mx-5'><a href="#">Payments</a></li>
        <li className='mx-5'><a href="#">Login</a></li>
      </ul>
    </nav>
  );
};

const MyComponent = () => {
  return (
    <div className="container-fluid pt-2" style={{ backgroundColor: '#b2aeff' }}>
      <div className="content">
        <img src={bannerImg} alt="Banner" style={{ width: '100%', maxWidth: '600px', height: 'auto', display: 'block' }} />
        <div className="text">
          <h1>THE BEST COURSES</h1>
          <h1>OF ALL TIME</h1>
          <button className="explore">Explore more</button>
        </div>
      </div>
    </div>
  );
}

const InfoSection = () => {
  return (
    <div className='container-fluid'>
      <div className='row mt-3 pb-5'>
        <div className='col-6 mx-4 mt-3'>
          <img src={Image} alt="Info" style={{ width: '100%', maxWidth: '600px', height: 'auto', display: 'block' }} />
        </div>
        <div className='col-5'>
          <div className='row mt-3'>
            <div className='col-5 mx-5'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">International certificate</h5>
                  <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
              </div>
            </div>
            <div className='col-5'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">International certificate</h5>
                  <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col-5 mx-5'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">International certificate</h5>
                  <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
              </div>
            </div>
            <div className='col-5'>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">International certificate</h5>
                  <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const grades = ()=>{
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6'>
          <div className='card'>
            <h1>Hello</h1>
          </div>
        </div>
        <div className='col-6'>
          <div className='card'>
            <h1>Hello</h1>
          </div>
        </div>
        <div className='col-6'>
          <div className='card'>
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </div>
  )
}





/* 
function SchoolLevels() {
  const levels = [
    {
      title: "Primary School",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/93c61035485c50e3648246ab5366a3c6e4831b5e3ec975a7320c7be3d957c0df?apiKey=bb53bbd52a344e8a9622d9a748e383b4&"
    },
    {
      title: "Middle School",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/02e8529e74ffde7687483b29892669bcc03b572dbd1089789292ea5429f829d9?apiKey=bb53bbd52a344e8a9622d9a748e383b4&"
    },
    {
      title: "Upper School",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d62ee25de0d3ae2a677158604e4a889dfcba7771c7b5063d486c86f9bd39ec6e?apiKey=bb53bbd52a344e8a9622d9a748e383b4&"
    }
  ];

  return (
    <section className={styles.schoolLevels}>
      {levels.map((level, index) => (
        <SchoolLevelCard key={index} {...level} />
      ))}
    </section>
  );
}
 

function Statistics() {
  return (
    <section className={styles.statistics}>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>10000+</span>
        <span className={styles.statLabel}>Students</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>500+</span>
        <span className={styles.statLabel}>Teaching hours</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>80+</span>
        <span className={styles.statLabel}>Staff</span>
      </div>
    </section>
  );
}



.statistics {
  background-color: #efeeff;
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
  margin-top: 45px;
}

.statItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  font-family: Inter, sans-serif;
}

.statNumber {
  font-size: 128px;
  font-weight: 700;
}

.statLabel {
  font-size: 36px;
  font-weight: 300;
  margin-top: 10px;
}

@media (max-width: 991px) {
  .statistics {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .statNumber {
    font-size: 40px;
  }

  .statLabel {
    font-size: 24px;
  }
} */



export default App;
