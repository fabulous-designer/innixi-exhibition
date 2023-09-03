import "../styles/Poster.css";

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export default function Poster({ bottles, backHome }) {
  const filledBottles = bottles.filter((bottle) => bottle.percent);
  const showDefault = filledBottles.length === 1;
  const total = filledBottles.reduce((res, bottle) => res + bottle.percent, 0);
  const list = filledBottles.map((bottle) => {
    const percent = (bottle.percent / total) * 100;
    return {
      percent: parseInt(percent),
      decimal: percent - parseInt(percent),
      content: bottle.poster,
    };
  });
  const diff = 100 - list.reduce((res, bottle) => res + bottle.percent, 0);
  const sortedList = [...list].sort((a, b) => (a.decimal > b.decimal ? -1 : 1));
  for (let i = 0; i < diff; ++i) {
    sortedList[i].percent++;
  }

  const content = showDefault
    ? `80% ${filledBottles[0].poster} and 20% essential oil`
    : list.map((bottle) => `${bottle.percent}% ${bottle.content}`).join(", ");

  const date = new Date();
  const year = date.getFullYear();
  const month = months[date.getMonth()] ;
  const day = date.getDate();

  return (
    <div className="poster">
      <div className="poster-box">
        <div>
          <p className="m-0">I’m doing alright but truth be told, I’m a cuppa brewed of...</p>
          <p className="m-0 content">{content}</p>
        </div>
        <div className="footer">
          <div className="date">{`${month} ${day}, ${year}`}</div>
          <div className="website">innixi.app</div>
        </div>
      </div>
      <button onClick={backHome}>back TO HOME</button>
    </div>
  );
}