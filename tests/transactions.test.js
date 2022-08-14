import React from "react";
import * as renderer from "react-test-renderer";
import Transactions from "../components/Transactions";

const component = renderer.create(<Transactions />);

describe("Transactions", () => {
  // snapshot tests for Transactions component

  it("should render the Transactions component correctly", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
