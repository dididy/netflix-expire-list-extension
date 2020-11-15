import React from "react";
import styled from "@emotion/styled";

import Netflix from "../../chrome/icons/128.png";

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f9f9fa;
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

const WrapVisit = styled.button`
  background-color: black;
  border: none;
  display: flex;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: bold;
  margin-right: 20px;
  border-radius: 5px;
  outline: none;
  &:hover {
    box-shadow: 0 2px gray;
  }
  &:active {
    transform: translateY(1px);
  }
`;

const WrapText = styled.div`
  margin-right: 10px;
`;

const WrapImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export default function Header() {
  return (
    <Wrapper>
      <div></div>
      <WrapVisit
        type="button"
        onClick={() => window.open("https://www.netflix.com/", "_blank")}
      >
        <WrapImg src={Netflix} />
        <WrapText>Watch Netflix</WrapText>
      </WrapVisit>
    </Wrapper>
  );
}
