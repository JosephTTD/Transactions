import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Transaction from "../components/Transaction";

const component = shallow(
  <Transaction
    name="Kidz Bop"
    value="123"
    currency="USD"
    category="Entertainment"
    crest="#fe2651"
  />
);

describe("Transaction", () => {
  it("renders correctly", () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it("should render the prop values correctly", () => {
    expect(component.find("span").text()).toEqual("K");
    expect(component.find("p").at(0).text()).toEqual("Entertainment");
    expect(component.find("p").at(1).text()).toEqual("Kidz Bop");
    expect(component.find("p").at(2).text()).toEqual("123 USD");
  });
});
