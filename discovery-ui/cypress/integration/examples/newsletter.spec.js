describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true);
  });
});
describe('My Second Test', function () {
  it('Visits my local site', function () {
    cy.visit('http://localhost:3000/');
    cy.get('#email').type('fake@gmail.com').should('have.value', 'fake@gmail.com');
    cy.contains('next').click();
    cy.get('#firstName').type('henry').should('have.value', 'henry');
    cy.get('#lastName').type('richardson').should('have.value', 'richardson');
    cy.contains('sign up').click();
  });
});
