import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  background-color: white;
  padding: 50px 10px 10px 10px;
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
        <Body data={val} timeNow={dateTime} />
      ))}
      <Footer />
    </Wrapper>
  );
}
