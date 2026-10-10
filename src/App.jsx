import { useRef, useState } from "react";
import Envelope from "./components/Envelope";
import FloatingHearts from "./components/FloatingHearts";
import Sparkles from "./components/Sparkles";
import LoveLetter from "./components/LoveLetter";
import PageTransition from "./components/PageTransition";
import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const openLetter = async () => {
    setIsOpen(true);

    if (audioRef.current) {
      try {
        audioRef.current.volume = 0.65;
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Music could not start automatically:", error);
        setIsPlaying(false);
      }
    }
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Unable to play music:", error);
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <main className="app">
      <audio
        ref={audioRef}
        src="/music/miss-u-i.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <FloatingHearts />
      <Sparkles />

      {isOpen && (
        <button
          className="music-control"
          onClick={toggleMusic}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <span className={isPlaying ? "music-icon playing" : "music-icon"}>
            ♪
          </span>
          {isPlaying ? "Pause our song" : "Play our song"}
        </button>
      )}

      {!isOpen ? (
        <PageTransition>
          <section className="opening-screen">
            <p className="eyebrow">A little something from my heart</p>

            <h1 className="opening-title">
              For you,
              <br />
              <span>my love.</span>
            </h1>

            <p className="opening-description">
              There are some things I wish I could say while holding you close.
              Until then, I put them here for you.
            </p>

            <Envelope onOpen={openLetter} />

            <p className="opening-hint">
              Tap the envelope when you're ready
              <span className="hint-heart"> ♥</span>
            </p>
          </section>
        </PageTransition>
      ) : (
        <PageTransition>
          <LoveLetter />
        </PageTransition>
      )}

      <footer className="site-footer">
        <span>Made with love, just for you</span>
        <span className="footer-heart">♥</span>
      </footer>
    </main>
  );
}