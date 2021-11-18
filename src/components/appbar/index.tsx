import './style.scss';
import logo from '../../images/logo.jpg';

const AppBar = () => {
  return (
    <div className='appbar'>
      <img src={logo} className='app-logo' alt='logo' />
      <span className="app-name">Ayanda Somdaka</span>
    </div>
  );
};

export default AppBar;
