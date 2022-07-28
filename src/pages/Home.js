import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "Home";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Welcome to My Website</h1>
      <p className="section-home">
        Hello guys, Welcome to My website, you can see about My personal data
      </p>
    </section>
  );
}
