import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("@testing-library/react -renders without crashing", () => {
    const container = render(<App />);
    expect(container).toBeDefined();
  });
});
