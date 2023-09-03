import "../styles/Poster.css";

export default function Poster({ backHome }) {
  return (
    <div className="poster">
      <div className="poster-box">
        <div className="content">
          <p>I’m doing alright but truth be told, I’m a cuppa brewed of...</p>
          <p>70% musing white tea and 30% brilliant peppermint</p>
        </div>
        <div className="footer">
          <div className="date">Sep 16, 2023</div>
          <div className="website">innixi.app</div>
        </div>
      </div>
      <button onClick={backHome}>back TO HOME</button>
    </div>
  );
}
