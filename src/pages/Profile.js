import { useEffect } from "react";

export default function Profile() {
  useEffect(function () {
    document.title = "Profile";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Profile</h1>
      <p className="section-home">Hallo, My name is Muhammad Rindy.</p>
      <p>
        Im stay in Batam Island, and i am a programmer graduated from Politeknik
        Negeri Batam
      </p>
    </section>
  );
}
