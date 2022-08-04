import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav id='navbar'>
        <h2>
          <Link to='/'>Movies</Link>
        </h2>
        <Link to='/movie/1'>Movie-1</Link>
        <Link to='/search'>Search</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
