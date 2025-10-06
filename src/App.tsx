import './App.css';
import Background from './components/Background';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSlutAnimating, setIsSlutAnimating] = useState(false);

  const handleClick = () => {
    setIsSlutAnimating(true);
    setTimeout(() => {
      setIsTransitioning(true);
    }, 800);
    setTimeout(() => {
      navigate('/yes');
    }, 1400);
  };

  return (
    <>
      <div className={`max-w-screen h-screen overflow-hidden relative my-[0] p-8 text-center ${isTransitioning ? 'page-transition-out' : ''}`}>
        <Background />
        <div className="flex flex-col gap-24 md:mt-44 mt-32 justify-center">
          <h1 className="text-3xl md:text-6xl mb-14 md:mb-0 z-50 white-shadow">
            To continue, please click{' '}
            <span 
              className={`cursor-pointer underline heart-pulse transition-all duration-300 ${isSlutAnimating ? 'slut-animation' : ''}`}
              onClick={handleClick}
            >
              here
            </span>
            .
          </h1>
          {isSlutAnimating && (
            <div className="heart-particles">
              <span>💖</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
