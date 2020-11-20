import React from "react";

import { render, fireEvent } from "@testing-library/react";

import GitHubButton from "./index";

describe("GitHubButton", () => {
  // https://stackoverflow.com/a/60665163
  const { open } = window;

  beforeAll(() => {
    delete window.open;
    window.open = jest.fn();
  });

  afterAll(() => {
    window.open = open;
  });

  function renderGitHubButton(handleClick = undefined) {
    return render(<GitHubButton onClick={handleClick} />);
  }

  it("render without explosion", () => {
    const { container } = renderGitHubButton();

    expect(container).toBeTruthy();
  });

  context("when click url", () => {
    it("renders the Landing page", () => {
      const { getByTestId } = renderGitHubButton(open);

      const ghButton = getByTestId("gh_button");

      expect(window.open).not.toBeCalled();
      fireEvent.click(ghButton);
      expect(window.open).toBeCalled();
    });
  });
});
