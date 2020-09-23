import React from "react"
import {mount} from "enzyme"
import App from "../src/App"
import { render } from '@testing-library/react';

describe("App", () => {
    it("renders currency converter", () => {
        const wrapper = mount(<App/>)
        expect(wrapper.find("h1").text()).toContain("Currency Converter")
    })
})