import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import App from "./App";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("App", () => {
  it("enzyme - renders without crashing", () => {
    const element = shallow(<App />);
    expect(element).toBeDefined();
  });

  it("@testing-library/react -renders without crashing", () => {
    const container = render(<App />);
    expect(container).toBeDefined();
  });
});
