import "jsdom-global/register";
import { act } from "react-dom/test-utils";
import React from "react";
import toJson from "enzyme-to-json";
import { mount, shallow } from "enzyme";
import Transactions from "../components/Transactions";

describe("Transactions", () => {
  let wrapper;
  let mockResponseData;

  beforeEach(() => {
    mockResponseData = {
      transactions: [
        {
          description: "John Lewis",
          date: "2018-06-30",
          amount: {
            value: -57.21,
            currency_iso: "GBP",
          },
        },
        {
          description: "KFC",
          date: "2017-12-22",
          amount: {
            value: 510.55,
            currency_iso: "GBP",
          },
        },
        {
          description: "H&M",
          date: "2018-07-01",
          amount: {
            value: -77.21,
            currency_iso: "GBP",
          },
        },
        {
          description: "Secret ;)",
          date: "2018-07-03",
          amount: {
            value: 68.99,
            currency_iso: "GBP",
          },
        },
      ],
    };
    // transactions = mockResponseData;
    jest.clearAllMocks();
    global.fetch = jest.fn(async () => ({
      ok: true,
      json: async () => mockResponseData,
    }));
  });

  it("should render correctly", () => {
    wrapper = shallow(<Transactions />)
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it("should show loading indicator upon initial mount", async () => {
    wrapper = mount(<Transactions />);
    return act(() => {
      const img = wrapper.find("div").childAt(0);
      expect(img.html()).toEqual('<img src="images/loader.svg">');
      return new Promise(setImmediate);
    });
  });

  it("should render the transactions", async () => {
    wrapper = mount(<Transactions />);
    await act(() => new Promise(setImmediate));
    wrapper.update();

    const transactions = wrapper.find("section").at(1);

    expect(transactions.children()).toHaveLength(mockResponseData.transactions.length);
    expect(transactions.find("p").at(0).text()).toEqual(mockResponseData.transactions[2].description);
  });

  it("should show error message when an error occurs", async () => {
    global.fetch = jest.fn(async () => ({
      ok: false,
      status: "Something went wrong",
    }));

    wrapper = mount(<Transactions />);
    await act(() => new Promise(setImmediate));
    wrapper.update();

    const error = wrapper.find("div").childAt(0);
    expect(error.html()).toEqual('<p>Error: Something went wrong</p>');
  });
});
