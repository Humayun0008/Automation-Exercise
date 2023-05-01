const Random_Email = Math.random().toString(36).substring(7) + "@gmail.com";
const Password="Britney123";
const user_name ="Britney";
Cypress.Commands.add("RegisterUser_WhileCheckout", () => {
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.modal-body > :nth-child(2) > a').click({force:true});
    cy.get('.nav > :nth-child(1)').click();
    cy.NewResiter_User(Random_Email,Password);
    cy.Checkout_Page();
})
Cypress.Commands.add("Checkout_Page",()=>{
    cy.get(".navbar-nav >:nth-child(10)").should("have.text"," Logged in as "+user_name)
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get(':nth-child(2) > .heading').should("have.text","Address Details");
    cy.get(':nth-child(4) > .heading').should("have.text","Review Your Order");
    cy.SelectandTypeData(".form-control","Placed Order for the Two Products");
    cy.get(':nth-child(7) > .btn').click();
})
Cypress.Commands.add("Payment_Method",()=>{
    cy.SelectandTypeData('[name="name_on_card"]',"Britney");
    cy.SelectandTypeData('[data-qa="card-number"]',"4242424242424242");
    cy.SelectandTypeData('[data-qa="cvc"]',"123");
    cy.SelectandTypeData('[data-qa="expiry-month"]',"12");
    cy.SelectandTypeData('[data-qa="expiry-year"]',"2008");
    cy.get('[data-qa="pay-button"]').click();
    cy.get('.col-sm-9 > p').should("have.text","Congratulations! Your order has been confirmed!");
})
