// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
/// <reference types="Cypress" />
const user_name ="Britney";
Cypress.Commands.add("SelectandTypeData",(seclator_value,value)=>{
    cy.get(seclator_value).type(value);
})
Cypress.Commands.add("Delete_Account",()=>{
    cy.get(".navbar-nav >:nth-child(10)").should("have.text"," Logged in as "+user_name)
    cy.get("[href='/delete_account']").click();
    cy.get('[data-qa="account-deleted"] >b').should("have.text","Account Deleted!");
    cy.get('[data-qa="continue-button"]').click();
})
Cypress.Commands.add("All_Product_Page",()=>{
    cy.url().should("eq", "https://automationexercise.com/");
    cy.get(".navbar-nav > :nth-child(2)").click();
    cy.get(".title.text-center").should("have.text", "All Products");
})