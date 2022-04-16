import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "./../../../Utils";
import SharedButton from "./index";
//Import the required components and func

describe("1 SharedButton Component", () => {
  describe("1.1 Checking PropTypes", () => {
    it("1.1.1 Should NOT throw a warning", () => {
      const expectedProps = {
        buttonText: "sample Button Text",
        emitEvent: () => {},
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  //checking proptype for SharedButton Component with creating a sample test in const expectedProps

  describe("1.2 Renders", () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: "sample Button Text",
        emitEvent: mockFunc,
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("1.2.1 Should Render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
    //testing for existing the buttonComponent

    it("1.2.2 Should emit callback on click event", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
    //simulating click on the button and checking fetching operation exist
  });
});