import React from "react";
import toJson from "enzyme-to-json";
import { shallow} from "enzyme";
import Card from "../components/Card";


const component = shallow(
  <Card amount="100" name="Jessy Day" doe="01/2023" />
);

describe("Card", () => {
  it("renders correctly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render the prop values correctly", () => {
    expect(component.find("h3").text()).toEqual("£100");
    expect(component.find("p").at(0).text()).toEqual("Jessy Day");
    expect(component.find("p").at(1).text()).toEqual("01/2023");
  });

  it("should render zero if the amount prop is empty", () => {
    const component = shallow(
      <Card amount="" name="Jessy Day" doe="01/2023" />
    );
    const amount = component.find("h3").text();
    expect(amount).toBe("£0");
  });
});
