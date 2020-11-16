import React, { useState, useEffect } from "react";
import { Html5Entities } from "html-entities";
import styled from "@emotion/styled";

import Header from "./components/Header";

import GitHub from "../chrome/icons/favicon.ico";

const Wrapper = styled.div`
  background-color: white;
  padding: 50px 10px 10px 10px;
`;

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

const Footer = styled.div`
  color: gray;
  font-size: 13px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-weight: bold;
`;

const WrapButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  &:hover {
    box-shadow: 0 2px gray;
  }
  &:active {
    transform: translateY(1px);
  }
`;

const WrapImg = styled.img`
  width: 20px;
  height: 20px;
`;

export default function App() {
  const [lists, setLists] = useState([]);
  const [dateTime, setDateTime] = useState();

  async function getResource() {
    try {
      const response = await fetch(
        "https://dididy.github.io/netflix-expire-list-extension/list.json",
        {
          method: "GET",
        }
      );
      await response.json().then((data) => {
        setLists(data.results.reverse());
      });
    } catch (err) {
      alert(err);
    }
  }

  useEffect(() => {
    setDateTime(Date.now);
    getResource();
  }, []);

  return (
    <Wrapper>
      <Header />
      {lists.map((val) => (
        <WrapEach
          key={val.netflixid}
          onClick={() =>
            window.open(
              `https://www.netflix.com/kr/title/${val.netflixid}`,
              "_blank"
            )
          }
        >
          <div>{Html5Entities.decode(val.title)}</div>
          <WrapRemain>
            D -{" "}
            {Math.floor(
              (Date.parse(val.expiredate) - dateTime) / (1000 * 60 * 60 * 24)
            )}
          </WrapRemain>
        </WrapEach>
      ))}
      <Footer>
        Author: Yongjae Lee
        <WrapButton
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/dididy/netflix-expire-list-extension",
              "_blank"
            )
          }
        >
          <WrapImg src={GitHub} />
        </WrapButton>
      </Footer>
    </Wrapper>
  );
}
