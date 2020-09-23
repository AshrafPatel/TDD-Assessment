import React from "react"
import {mount, shallow} from "enzyme"
import App from "../src/App"
import { render } from '@testing-library/react';
import CurrencyForm from "./components/CurrencyForm/CurrencyForm";

describe("App Headline", () => {
    it("renders currency converter", () => {
      const wrapper = mount(<App/>)
      expect(wrapper.find("h1").text()).toContain("Currency Converter")
    })
})

describe("App Currency Form", () => {
  it("renders a currency form", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.containsMatchingElement(<CurrencyForm />)).toEqual(true);
  })
})

describe("App Date Form", () => {
  it("renders a date form", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.equals(<div className="date-form-container"/>)).to.equal(true);
  })
})

describe("App Log Date", () => {
  it("renders a log", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.equals(<div className="log-form-container"/>)).to.equal(true);
  })
})

