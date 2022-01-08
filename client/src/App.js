import Header from './components/Header.js';
import Hero from './components/Hero.js';
import ArtWorks from './components/ArtWorks.js';
import Footer from './components/Footer.js';
// import Upload from './components/Upload.js';
import PlaceABid from './components/PlaceABid';
export default function App() {
  return (
    <div className="bg-bg">
      <Header />
      <Hero />
      <ArtWorks />
      <Footer />
      {/* <Upload /> */}
      {/* <PlaceABid /> */}
    </div>
  );
}
