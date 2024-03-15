describe('Search Functionality', () => {
  it('should show no results found error when an invalid search terms is entered', () => {
    cy.visit('https://maax.com/')

    cy.get('#onetrust-accept-btn-handler', { timeout: 5000 }).should('be.visible');
    cy.get("#onetrust-accept-btn-handler").click(); // Accepting Cookies for the website

    cy.get('form[role="search"] input').type("dogfood", {waitForAnimations: false})

    cy.get('form[role="search"] a.icon-search').click(); // 1 element

    cy.get('.search-header .message', { timeout: 5000 }).should('be.visible');
    cy.get('.search-header .message').contains("No search results for 'dogfood'")
    cy.screenshot("E:\Air tech\cypress\Screenshot")
  });

  it('should show 581 results when searched for shower', () => {
    cy.visit('https://maax.com/')

    cy.get('#onetrust-accept-btn-handler', { timeout: 5000 }).should('be.visible');
    cy.get("#onetrust-accept-btn-handler").click(); // Accepting Cookies for the website

    cy.get('form[role="search"] input').type("Shower", {waitForAnimations: false})

    cy.get('form[role="search"] a.icon-search').click(); // multiple

    cy.get('.search-tabs #react-tabs-0', { timeout: 5000 }).should('be.visible');
    cy.get('.search-tabs #react-tabs-0').contains("Product(s) 581")
    cy.screenshot("E:\Air tech\cypress\Screenshot")
  });
  it('should show 8 results when searched for bathroom', () => {
    cy.visit('https://maax.com/')

    cy.get('#onetrust-accept-btn-handler', { timeout: 5000 }).should('be.visible');
    cy.get("#onetrust-accept-btn-handler").click(); // Accepting Cookies for the website

    cy.get('form[role="search"] input').type("bathroom", {waitForAnimations: false})

    cy.get('form[role="search"] a.icon-search').click(); // multiple

    cy.get('.search-tabs #react-tabs-0', { timeout: 5000 }).should('be.visible');
    cy.get('.search-tabs #react-tabs-0').contains("Product(s) 8")
    
    cy.screenshot("E:\Air tech\cypress\Screenshot")
      
  
  })
})