import Logo from '../components/Logo';
import Menu from '../components/Menu';
import { Container, Row, Col, Stack } from 'react-bootstrap';


const Header = () => (
  <div className="header-wrapper">
    
    <Logo />
    <Menu />

    <style>{`
      .header-wrapper {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0px;
        z-index: 1;
        background-color: white;
      }
      @media (max-width: 600px) {
        .header-wrapper {
          display: block;
          text-align: center;
        }
      }
    `}</style>
  </div>
);

export default Header;
