describe("smoke-test", () => {
    it("Make sure the headline shows up", ()=> {
        cy.visit("http://localhost:3000")
            .contains("Currency Converter")
    })
})