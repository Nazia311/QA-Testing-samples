///<reference types = "cypress"/>

it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb', {timeout:5000}).type('Software testing')
    cy.contains('Google Search').click()
   
})