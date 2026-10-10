const promises = [
  "I love you.",
  "I love you more than words can say.",
  "I love you more than you love me.",
  "I love you more than I show.",
  "I love you more than you think.",
  "I love you more than you feel.",
  "I love you more than ever.",
  "I love you just the way you are, and every year you grow older.",
  "I love you to the moon and back.",
  "I love you to the sun and back.",
  "I love you always and forever.",
  "I love you until my last breath.",
];

export default function LoveLetter() {
  return (
    <article className="love-letter">
      <header className="letter-header">
        <span className="letter-date">A LETTER FROM MY HEART</span>
        <div className="header-heart">♥</div>
        <h1>All My Lasts</h1>
        <p className="letter-subtitle">For my baby, Mercy.</p>
        <div className="ornament">
          <span />
          <span className="ornament-heart">♥</span>
          <span />
        </div>
      </header>

      <section className="letter-section">
        <h2 className="section-heading">Hey baby,</h2>

        <p>
          Falling in love with you wasn't planned, but it turned out to be the
          most perfect thing. I sometimes wonder what I did to deserve you,
          flaws and all. There isn't a single day I don't think about you, and
          words will never be enough to express how much I love you. I never
          thought I could feel this comfortable with someone, like I've finally
          found home. I can't wait to see you, hold you, and tell you in person
          how much I love you. You have my whole heart.
        </p>

        <p>
          Whenever you feel overwhelmed, remember whose queen you are and
          straighten your crown. Meeting you was fate, becoming your partner
          was a choice, but falling in love with you was beyond my control. I
          may be a little late to be your first, but I want all my lasts to be
          with you.
        </p>
      </section>

      <div className="letter-divider" aria-hidden="true">
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
      </div>

      <section className="letter-section">
        <h2 className="section-heading">My favourite kind of happiness</h2>

        <p>
          My happiness lives in the small moments we share: talking with you,
          laughing with you, feeling understood without trying. My smile
          appears effortlessly whenever my thoughts drift to you. Even on
          ordinary days, thinking of you adds a quiet warmth to my heart that
          lasts long after the moment passes. And when you're not around, I
          feel the absence in ways I can't explain. Missing you feels heavy,
          not out of need, but because you matter so much. The idea of losing
          you scares me, not from fear, but from love. What I feel is simple
          and true: my care, my comfort, my love, it all leads back to you.
        </p>
      </section>

      <section className="promise-section">
        <div className="promise-heading">
          <span className="tiny-heart">♥</span>
          <h2>Let me tell you something</h2>
          <span className="tiny-heart">♥</span>
        </div>

        <p className="promise-intro">
          Because sometimes, even the simplest words deserve to be said again.
        </p>

        <div className="promises">
          {promises.map((promise, index) => (
            <p
              className={`promise promise-${index + 1}`}
              key={promise}
              style={{ "--promise-index": index }}
            >
              {promise}
            </p>
          ))}
        </div>
      </section>

      <footer className="letter-ending">
        <div className="ending-heart">♥</div>

        <p className="ending-small">And if you ever forget anything...</p>

        <h2>
          Remember that
          <br />
          <span>you are loved.</span>
        </h2>

        <p className="ending-message">
          Not just on the beautiful days. Not just when everything is easy.
          Through the ordinary moments, the difficult ones, and all the days
          we haven't lived yet.
        </p>

        <div className="signature">
          <span>With all my heart,</span>
          <p>Yours, always. ♥</p>
        </div>

        <p className="last-line">All my lasts, with you.</p>
      </footer>
    </article>
  );
}