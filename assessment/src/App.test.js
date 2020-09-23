import React from "react"
import {mount, shallow} from "enzyme"
import App from "../src/App"
import { render } from '@testing-library/react';
import CurrencyForm from "./components/CurrencyForm/CurrencyForm";
import DateForm from "./components/DateForm/DateForm"
import DateLogger from "./components/DateLogger/DateLogger"

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
    expect(wrapper.containsMatchingElement(<DateForm/>)).toEqual(true);
  })
})

describe("App Log Date", () => {
  it("renders a log", () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.containsMatchingElement(<DateLogger/>)).toEqual(true);
  })
})

