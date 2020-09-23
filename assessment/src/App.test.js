import React from "react"
import {mount} from "enzyme"
import App from "../src/App"
import { render } from '@testing-library/react';

describe("App Headline", () => {
    it("renders currency converter", () => {
      const wrapper = mount(<App/>)
      expect(wrapper.find("h1").text()).toContain("Currency Converter")
    })
})

describe("App Currency Form", () => {
  it("renders a currency form", () => {
    const wrapper = mount(<App/>)
    expect(wrapper.contains("<div className='currency-form-container'>")).to.equal(true);
  })
})

describe("App Date Form", () => {
  it("renders a date form", () => {
    const wrapper = mount(<App/>)
    expect(wrapper.contains("<div className='date-form-container'>")).to.equal(true);
  })
})

describe("App Log Date", () => {
  it("renders a log", () => {
    const wrapper = mount(<App/>)
    expect(wrapper.contains("<div className='log-form-container'>")).to.equal(true);
  })
})

