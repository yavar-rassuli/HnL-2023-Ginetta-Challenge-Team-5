import React from 'react';
import 'app/api/src/style.css';

const Header: React.FC = () => {
  return (
    <div className="relative mb-8 md:p-20 grid sm:p-6 p-4 grid-cols-5 w-full " style={{
      // background: 'linear-gradient(90deg, #8A2BE2, #0000FF)',
      background: '#523AC7',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="col-span-1 flex items-center justify-center">
        <p className="text-dark rounded-full bg-white font-bold" style={{ borderRadius: '50%', width: '100px', height: '100px', textAlign: 'center', lineHeight: '100px', display: 'inline-block' }}>
          LegalAId
        </p>
      </div>
<div className="col-span-4 mr-20">
  <h1 className="md:text-4xl sm:text-2xl text-xl font-bold mb-8 text-center " style={{
        WebkitBackgroundClip: 'text',
        color: 'white',
        lineHeight:1.6
      }}>
       You are chatting with an LegalAId assisstant
      </h1>
</div>
      

      <div className="wave-shape-container">
        <svg className="wave-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="1" d="M0,288L48,282.7C96,277,192,267,288,245.3C384,224,480,192,576,186.7C672,181,768,203,864,218.7C960,235,1056,245,1152,240C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Header;
