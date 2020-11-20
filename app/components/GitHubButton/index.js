import React from "react";
import styled from "@emotion/styled";

import GitHub from "../../../chrome/icons/favicon.ico";

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

export default function GitHubButton() {
  return (
    <WrapButton
      type="button"
      onClick={() =>
        window.open(
          "https://github.com/dididy/netflix-expire-list-extension",
          "_blank"
        )
      }
    >
      <WrapImg data-testid="gh_button" src={GitHub} />
    </WrapButton>
  );
}
