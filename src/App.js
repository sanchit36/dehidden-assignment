import main1 from './assets/images/main1.png';
// import main2 from './assets/images/main2.png';
import infoInfo from './assets/images/info-icon.png';
import logo2 from './assets/images/logo2.png';
import Button from './components/Button/Button';
import './App.css';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <>
      <div className='vector1'></div>
      <img className='logo-d-only' src={logo2} alt='logo' />

      {/* Header */}
      <Header />

      {/* Main */}
      <main className='app-container'>
        <div className='card-container'>
          <div className='blend'></div>
          <div className='info-card'>
            <img src={main1} alt='eth' />
            <h2>Shards of ETH</h2>
            <h1>Level Up</h1>
            <h3>#007</h3>
            <Button icon={infoInfo}>About</Button>
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
