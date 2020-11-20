import React from "react";
import styled from "@emotion/styled";

import GitHubButton from "./GitHubButton";

const Wrapper = styled.div`
  color: gray;
  font-size: 13px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <Wrapper>
      Author: Yongjae Lee
      <GitHubButton />
    </Wrapper>
  );
}
