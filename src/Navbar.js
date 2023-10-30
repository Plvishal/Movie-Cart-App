import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div style={styles.nav}>
          <div style={styles.title}>Movie -App</div>
          <div style={styles.cartContainer}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
              alt="CartIcon"
              style={styles.cartIcon}
            />

            <span style={styles.cartCount}>0</span>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
const styles = {
  nav: {
    width: '100%',
    height: '70px',
    background: '#dc2430',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: '30px',
    textTransform: 'uppercase',
    marginLeft:'15px'
  },
  cartContainer: {
    position: 'relative',
    cursor: 'pointer',
  },
  cartIcon: {
    height: '48px',
    marginRight: '20px',
  },
  cartCount: {
    background: 'orange',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: '10px',
    top: '-5px',
    fontSize: '12px',
  },
};
