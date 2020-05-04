describe("Creates a fruit", () => {
  it("fills out form and submits to create new fruit", () => {
    cy.visit("http://localhost:3000/fruits/new");

    cy.contains("Create Fruit").click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/fruits/");
  });
});
