import React from "react";
import * as renderer from "react-test-renderer";
import Card from "../components/Card";

/*jest.mock(Card, () => ({
  Card: (props) => {
    const MockCard = "mock-card";
    return <MockCard {...props} />;
  },
}));*/

const component = renderer.create(
  <Card amount="100" name="Jessy Day" doe="01/2023" />
);

describe("Card", () => {
  // snapshot tests
  it("renders correctly", () => {
    const component = renderer.create(<Card />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should render the prop values correctly", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  // write unit tests for Card component
  it("should render the value passed to the prop correctly on ", () => {
    const amount = component.root.findByType("h3").children[0];
    expect(amount).toBe("£100");
  });

  it("should render the name passed to the prop correctly", () => {
    const name = component.root.props.name;
    expect(name).toBe("Jessy Day");
  });

  it("should render the doe passed to the prop correctly", () => {
    const doe = component.root.props.doe;
    expect(doe).toBe("01/2023");
  });
});
