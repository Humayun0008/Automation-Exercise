const { beforeEach } = require("mocha");

describe('Verify that User is Authenticated', () => {
  beforeEach(()=>{
    cy.visit("/");
  })
  it('Verify that the user is successfully registered', () => {
    cy.Resiter_User();
  })
  it.only('Verify that User Login with correct email and password',()=>{
    cy.Login();
  })
})