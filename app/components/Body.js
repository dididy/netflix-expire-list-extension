import React from "react";
import styled from "@emotion/styled";

import { Html5Entities } from "html-entities";

const WrapEach = styled.button`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border-bottom: 1px solid black;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Hind Siliguri";
  font-size: 17px;
  &:hover {
    box-shadow: 0 2px gray;
  }
  &:active {
    transform: translateY(1px);
  }
`;

const WrapRemain = styled.div`
  width: 50px;
  background-color: #2f464d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export default function Body({ data, timeNow }) {
  return (
    <WrapEach
      key={data.netflixid}
      onClick={() =>
        window.open(
          `https://www.netflix.com/kr/title/${data.netflixid}`,
          "_blank"
        )
      }
    >
      <div>{Html5Entities.decode(data.title)}</div>
      <WrapRemain>
        D -{" "}
        {Math.floor(
          (Date.parse(data.expiredate) - timeNow) / (1000 * 60 * 60 * 24)
        )}
      </WrapRemain>
    </WrapEach>
  );
}
