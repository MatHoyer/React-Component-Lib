import Router from './Router';
import { NavBar } from './components/Navbar';

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="container max-w-5xl my-10 space-y-10 px-3">
        <Router />
      </div>
    </div>
  );
};

export default App;
