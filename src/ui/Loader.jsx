import { useEffect, useRef } from 'react';

function Loader() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      <div className="loader"></div>

      <audio ref={audioRef} src="/bg.mp3" preload="auto" />
    </div>
  );
}

export default Loader;
