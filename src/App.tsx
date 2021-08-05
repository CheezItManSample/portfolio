import './App.css';

import Avatar from './components/avatar';
import MainMenu, {LinkEntry} from './components/main_menu';
import Sidebar from './components/sidebar';
import Contact from './components/contact';

const owner = 'Bozo the Clown'
const avatarPic = 'http://placekitten.com/120/120';
const menuLinks: LinkEntry[] = [
  {
    icon: "bi-plus-circle",
    text: "Home",
    url: "#",
  },
  {
    icon: "bi-plus-circle",
    text: "About",
    url: "#",
  },
  {
    icon: "bi-plus-circle",
    text: "Portfolio",
    url: "#",
  },
  {
    icon: "bi-plus-circle",
    text: "Contact",
    url: "#",
  },
]

// lat: 41.8781, lng: -87.6298
const App = () => {
  return (
    <div className="App">
      <Sidebar>
          <Avatar owner={owner} avatarPic={avatarPic} />
          <MainMenu links={menuLinks} />
      </Sidebar>
      <header className="App-header">
        
      </header>
      <Contact 
        name="Bob Hope" 
        email="bob@hope.com"  
        lon={-87.6298}
        lat={41.8781}
        city="Chicago"
        state="Il"
      />
    </div>
  );
}

export default App;
