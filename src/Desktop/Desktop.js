import './Desktop.css';
import Gallery from './Gallery.js';
import Footer from './Footer.js';

function Desktop() {
  return (
    <div>
      <header className="Desktop-header">
        <div className="Desktop-logo">
          ICOLA Gallery
        </div>
      </header>
      <main>
        <Gallery />
      </main>
      <Footer />
    </div>
    
  );
}

export default Desktop;
