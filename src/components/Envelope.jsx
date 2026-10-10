export default function Envelope({ onOpen }) {
  return (
    <button
      className="envelope-button"
      onClick={onOpen}
      aria-label="Open your love letter"
    >
      <div className="envelope">
        <div className="envelope-back" />

        <div className="letter-preview">
          <span className="letter-preview-title">For my baby</span>
          <span className="letter-preview-heart">♥</span>
        </div>

        <div className="envelope-front" />
        <div className="envelope-flap" />

        <div className="envelope-seal">
          <span>♥</span>
        </div>
      </div>
    </button>
  );
}