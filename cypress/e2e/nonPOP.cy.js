describe("Page object example", () => {
  it("login page test", () => {
    // visit page
    cy.visit("https://www.edu.goit.global/account/login");
    // check title
    cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible");
    cy.get('.next-10stgr7 > .next-c1vj7d').should("have.text", "Login");
    // check inputs
    cy.get("#user_email").should("be.visible");
    cy.get("#user_password").should("be.visible");
    // check button
    cy.get(".eckniwg2").should("be.visible");
    // check link
    cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible");
    cy.get('.next-1f1fv1i > .next-1qrvie4').should("have.text", "I can't remember the password");
  });
});