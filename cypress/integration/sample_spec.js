describe("My First Test", () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit("http://localhost:3000/fruits");

    cy.contains("grapefruit").click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/fruits/5e57");
  });
});
