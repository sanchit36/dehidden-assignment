import main1 from './assets/images/main1.png';
import main2 from './assets/images/main2.png';
import infoIcon from './assets/images/info-icon.png';
import boatIcon from './assets/images/boat-icon.png';
import logo2 from './assets/images/logo2.png';
import Button from './components/Button/Button';
import './App.css';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <>
      <div className='vector1'></div>
      <div className='vector2'></div>
      <div className='vector3'></div>
      <img className='logo-d-only' src={logo2} alt='logo' />

      {/* Header */}
      <Header />

      {/* Main */}
      <main className='app-container'>
        <div className='card-container'>
          <div className='blend'></div>
          <div className='info-card'>
            <img className='des-img' src={main1} alt='eth' />
            <img className='mobile-img' src={main2} alt='eth' />
            <h2>Shards of ETH</h2>
            <h1>Level Up</h1>
            <h3>#007</h3>
            <Button className='des-img' icon={infoIcon}>
              About
            </Button>
            <Button className='mobile-img' icon={boatIcon}>
              View on OpenSea
            </Button>
          </div>
        </div>

        <div className='main-container'>
          <ItemList />
        </div>
      </main>
    </>
  );
}

export default App;
