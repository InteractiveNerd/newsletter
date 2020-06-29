describe('NewsLetter Walkthrough Test', function () {
  it('Submits Fake User Info', function () {
    cy.visit('http://localhost:3000/');
    cy.get('#email').type('fake@gmail.com').should('have.value', 'fake@gmail.com');
    cy.wait(1500);
    cy.get('#gdpr').check();
    cy.wait(1500);
    cy.contains('next').click();
    cy.wait(1500);
    cy.get('#firstName').type('henry').should('have.value', 'henry');
    cy.wait(1500);
    cy.get('#lastName').type('richardson').should('have.value', 'richardson');
    cy.wait(1500);
    cy.contains('sign up').click();
  });
});
