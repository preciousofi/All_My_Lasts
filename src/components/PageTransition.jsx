import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`page-transition ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
}