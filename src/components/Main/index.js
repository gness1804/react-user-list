import './Main.css';
import Users from '../Users/';

function Main(){
  return (
    <div className="main">
      <h2 className="main-header">See below for our current users:</h2>
      <Users />
    </div>
  );
}

export default Main;
