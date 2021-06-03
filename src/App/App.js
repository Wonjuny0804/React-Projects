import './App.css';
import Basic from '../Basics/Basic';
import Free from '../freecode/Heat_example';
import List from '../ThingsFlow/List';

function App() {

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const getChartData = async () => {
  //     const response = await getData();
  //     setData(response.data);
  //   }

  //   getChartData();
  // }, []);

  return (
    <div className="App">
      <List OrganizationName={'angular'} RepoName={'angular-cli'}/>
    </div>
  );
}

export default App;
