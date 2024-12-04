import React from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import menuItems from "../../utils/menuItems";
import { LIMIT } from "styled-components/dist/utils/createWarnTooManyClasses";

function Navigation() {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Kaikaila</h2>
          <p>Your Money</p>
        </div>
        <ul className="menu-items">
          {menuItems.map((item) => {
            return <li key={item.id}>{item.icon}</li>;
          })}
        </ul>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav``;

export default Naz;
