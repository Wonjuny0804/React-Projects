import React from 'react';
import ListItem from './ListItem';
import './List.css'
import { sort } from 'd3';

const List = ({OrganizationName, RepoName}) => {

  const [datas, setDatas] = React.useState(null);
  const imgSrc = 'https://placehold.it/500x100?text=ad';
  const aTagHref = 'https://thingsflow.com/ko/home';

  React.useEffect(() => {
    const getData = async () => {
      fetch(`https://api.github.com/repos/${OrganizationName}/${RepoName}/issues`,{
        mode: 'cors'
      })
      .then(response => response.json())
      .then(data => data.sort((first, second) => +second.comments - +first.comments))
      .then(data => setDatas(data));
    }
    getData();
  }, []);

  return (
    <div className="listView">
      <h1>
        {OrganizationName}/{RepoName}
      </h1>
      { datas && datas.map((data, index) => 
        index === 4 ? <a href={aTagHref}><img classList="img" src={imgSrc} alt="광고"/></a> : <ListItem key={data.id}number={data.number} title={data.title} user={data.user.login} date={data.updated_at} comments={data.comments}/>)}
    </div>
  )
}

export default List
