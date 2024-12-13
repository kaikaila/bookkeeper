import React, { useState } from "react";
import styled from "styled-components";
import avatar from "../../img/avatar.png";
import { signout } from "../../utils/icons";
import { menuItems } from "../../utils/menuItems";

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Kaikaila</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                setActive(item.id);
              }}
              // for each li, if the active is this li, then it is given a className
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div className="bottom-nav">
        <li id="bottom-nav">{signout}Sign Out</li>
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  // target user-container className inside Navigation
  .user-con {
    height: 100px;
    display: flex;
    // flex-direction: column;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: var(--primary-color);
    }
    p {
      color: var(--primary-color2);
    }
  }

  .menu-items,
  .bottom-nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: var(--primary-color2);
      padding-left: 1rem;
      position: relative;
      // target the icon inside the menu-items
      i {
        color: var(--primary-color2);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  #bottom-nav {
    position: absolute;
    bottom: 20px;
  }

  .active {
    //	如果没有！important强行提高优先级Specificity，那么.menu-items li: 权重 0, 1, 1; .active: 权重 0, 1, 0，由于 .menu-items li 的权重更高，它的颜色规则会覆盖 .active。
    color: var(--primary-color) !important;
    i {
      color: var(--primary-color) !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: var(--primary-color);
      border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation;
