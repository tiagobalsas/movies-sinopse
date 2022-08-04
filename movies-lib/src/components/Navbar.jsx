import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
export const Navbar = () => {
  return (
    <nav id='navbar'>
      <h2>
        <Link to='/'>
          <BiCameraMovie />
          Movies
        </Link>
      </h2>
      <input type='text' placeholder='Busque um filme' />
      <button type='submit'>
        <BiSearchAlt2 />
      </button>
    </nav>
  );
};
