// Test suite - contains multiple test cases
describe("Testing the where to buy", () => {
    // Single Test case
    it("should visit the where to buy page", () => {
        cy.visit("https://maax.com/where-to-buy")
        cy.screenshot("E:\Air tech\cypress\Screenshot")
    });
     

    it("should display 3 options when we enter 90211 as the zipcode", () => {
        // Given
        cy.visit("https://maax.com/where-to-buy");

        cy.get("#onetrust-accept-btn-handler").click(); // Accepting Cookies for the website
        cy.get("#geocoder input").type("90211");

        // Expected outcome
        cy.get("ul.suggestions li").should('have.length',3)
        cy.screenshot("E:\Air tech\cypress\Screenshot")

    });

    it("should search for stores when a valid zipcode is entered", () => {
        cy.visit("https://maax.com/where-to-buy");

        cy.get("#onetrust-accept-btn-handler").click(); // Accepting Cookies for the website
        cy.get("#geocoder input").type("L6P2B3");
        cy.get("ul.suggestions li:first-child a").click();
       
        // Expected outcome
        cy.get("div.count-dealers span.count").contains('336')
        cy.screenshot("E:\Air tech\cypress\Screenshot")
    });

    it("should return zero stores when an zipcode with no store is entered", () => {
        cy.visit("https://maax.com/where-to-buy");

        cy.get("#onetrust-accept-btn-handler").click(); // Accepting Cookies for the website
        cy.get("#geocoder input").type("641005");
        cy.get("ul.suggestions li:first-child a").click();

        // Expected outcome
        cy.get("div.count-dealers span.count").contains('0')
        cy.screenshot("E:\Air tech\cypress\Screenshot")
    });

    it("should return no results found when an invalid zipcode is entered", () => {
        cy.visit("https://maax.com/where-to-buy");

        cy.get("#onetrust-accept-btn-handler").click(); // Accepting Cookies for the website
        cy.get("#geocoder input").type("6410055");
        
        // Expected outcome
        cy.get(".mapbox-gl-geocoder--error.mapbox-gl-geocoder--no-results").contains('No results found')
        cy.screenshot("E:\Air tech\cypress\Screenshot")
    });

    it("should search for stores when a valid city name is entered", () => {
        cy.visit("https://maax.com/where-to-buy");

        cy.get("#onetrust-accept-btn-handler").click(); // Accepting Cookies for the website
        cy.get("#geocoder input").type("Toronto");
        cy.get("ul.suggestions li:first-child a").click();
       
        // Expected outcome
        cy.get("div.count-dealers span.count").contains('309')
        cy.screenshot("E:\Air tech\cypress\Screenshot")
    });


});