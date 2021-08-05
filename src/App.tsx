import './App.css';

import Avatar from './components/avatar';

const owner = 'Bozo the Clown'
const avatarPic = 'http://placekitten.com/120/120';

const App = () => {
  return (
    <div className="App">
      <aside className="portfolio__sidebar">
          <Avatar owner={owner} avatarPic={avatarPic} />
        </aside>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
