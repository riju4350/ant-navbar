import {Menu} from 'antd'
import PropTypes from 'prop-types'
import './navbar.css'

const Navbar = ({isInline = false}) => {
  return (
    <div className='nav'>
      <Menu
      className='menu-links'
      mode={isInline ? "inline" : "horizontal"}
      items={[
          {
            label: "Home",
            key: "home"
          },
          {
            label: "About me",
            key: "about"
          },
          {
            label: "Portfolio",
            key: "portfolio"
          },
          {
            label: "Skills",
            key: "skills"
          },
          {
            label: "Contact me",
            key: "contact"
          },
          
        ]}>

      </Menu>
    </div>
  );
};

Navbar.propTypes = { isInline: PropTypes.bool}
export default Navbar;