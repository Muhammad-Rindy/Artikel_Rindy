import { useEffect } from "react";

export default function Contact() {
  useEffect(function () {
    document.title = "Contact";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">My Contact Person</h1>
      <p className="section-home">Muhammad Rindy</p>
      <ul>
        <li>
          <a href="https://gmail.com">Email</a>
        </li>
        <li>
          <a href="https://github.com/Muhammad Rindy">Github</a>
        </li>
        <li>
          <a href="https://Instgram.com/muhammadrindyy">Instagram</a>
        </li>
        <li>Whatsapp : 0817-6970-783</li>
      </ul>
    </section>
  );
}
