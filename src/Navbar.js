import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  width: 100%;
  height: 70px;
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CartImg = styled.img`
  height: 48px;
  margin-right: 20px;
`;
const Title = styled.div`
  color: white;
  font-size: 30px;
  text-transform: uppercase;
  margin-left: 15px;
`;
const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
`;
const CartCount = styled.span`
  background-color: orange;
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
`;

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Nav>
          <Title>Movie-App</Title>
          <CartContainer>
            <CartImg
              alt=""
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            ></CartImg>

            <CartCount>0</CartCount>
          </CartContainer>
        </Nav>
      </>
    );
  }
}

export default Navbar;
// const styles = {
//   title: {
//
//   },
//   cartContainer: {
//
//   },
//   cartIcon: {
//
//   },
//   cartCount: {
//
//   },
// };
