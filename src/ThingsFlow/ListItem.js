import './ListItem.css'
const dateToString = (date) => {
  const dateObject = new Date(date);
  return `${dateObject.getFullYear()}년 ${dateObject.getMonth()}월 ${dateObject.getDate()}일`;
}


const ListItem = ({number, title, user, date, comments}) => {

  return (
    <a href={`/${number}`} className="listItem">
      <div className="top">
        <p>{`#${number}`}</p>
        <h2>{`${title}`}</h2>
      </div>
      <div className="bottom">
        <p>{`작성자: ${user}`}</p>
        <p>{`작성일: ${dateToString(date)}`}</p>
      </div>
        <p className="comment">{`코멘트:${comments}`}</p>
    </a>
  )
}

export default ListItem
