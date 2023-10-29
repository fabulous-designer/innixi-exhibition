import "../styles/WelcomePop.css";
import check from "../assets/check.svg";
/**
 * 弹窗提示模块
 * @param {*} onClick:点击回调 
 * @returns 
 */
export default function WelcomePop({ onClick }) {
  return (
    <div className="welcome" onClick={onClick}>
      <div className="content">
        <p className="m-0">Thank you for stopping by.</p>
        <p>Just a friendly heads-up: this is a special prototype crafted for the exhibition, not the real-deal app.</p>
        <p className="m-0">So, take a gander, enjoy, and let your imagination run wild.</p>
        <img src={check} alt="check"></img>
      </div>
    </div>
  );
}
