describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});

describe('My Second Test', () => {
  it('Visits my local site', () => {
    cy.visit('http://localhost:3000/');

    cy.get('#email').type('fake@gmail.com').should('have.value', 'fake@gmail.com');

    cy.contains('Next').click();

    cy.get('#firstName').type('henry').should('have.value', 'henry');
    cy.get('#lastName').type('richardson').should('have.value', 'richardson');

    cy.contains('sign up').click();
  });
});
