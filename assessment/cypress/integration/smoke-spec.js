const baseUrl = "http://localhost:3000";

describe("smoke-test", () => {
    it("Make sure the headline shows up", ()=> {
        cy.visit(baseUrl)
            .contains("Currency Converter")
    })
})