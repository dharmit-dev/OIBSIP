import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Pizza, ShoppingCart } from 'lucide-react';
import { logout, reset } from '../features/auth/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { totalQuantity } = useSelector((state) => state.cart);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  const navLinkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-mark">
          <Pizza size={24} />
        </span>
        <span>PizzaDelivery</span>
      </Link>

      <div className="navbar-nav">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/menu" className={navLinkClass}>Menu</NavLink>
        <NavLink to="/builder" className={navLinkClass}>Builder</NavLink>
        <NavLink to="/cart" className={navLinkClass}>
          <ShoppingCart size={16} />
          Cart ({totalQuantity})
        </NavLink>
        {user?.role === 'admin' && <NavLink to="/admin" className={navLinkClass}>Admin</NavLink>}
        {user ? (
          <>
            <span className="nav-greeting">Hello, {user.name}</span>
            <button className="nav-action secondary" type="button" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={navLinkClass}>Login</NavLink>
            <NavLink to="/register" className="nav-action">Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
