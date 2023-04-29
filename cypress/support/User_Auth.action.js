const expected_url="https://automationexercise.com/";
const user_name ="Britney";
Cypress.Commands.add("Resiter_User",()=>{
    cy.url().should("eq",expected_url)
    cy.get("[href='/login']").click()
    cy.contains("New User Signup!").should("exist")
    cy.SelectandTypeData("[data-qa='signup-name']",user_name)
    cy.SelectandTypeData("[data-qa='signup-email']","Britney791@gmail.com")
    cy.get("[data-qa='signup-button']").click()
    cy.get(".title.text-center").first().should("exist")
    cy.get("#id_gender1").click();
    cy.SelectandTypeData("#password","Britney123");
    cy.get("#days").select("5");
    cy.get("#months").select("4");
    cy.get("#years").select("2015");
    cy.get("#newsletter").click();
    cy.get("#optin").click();
    cy.SelectandTypeData("#first_name","Britney");
    cy.SelectandTypeData("#last_name","Fisher");
    cy.SelectandTypeData("#company","Contour");
    cy.SelectandTypeData("#address1","Silicon Valley");
    cy.get("#country").select("India");
    cy.SelectandTypeData("#state","Punjab");
    cy.SelectandTypeData("#city","Lahore");
    cy.SelectandTypeData("#zipcode","54000");
    cy.SelectandTypeData("#mobile_number","03013324144");
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should("have.text","Account Created!");
    cy.get('[data-qa="continue-button"]').click();
    cy.get(".navbar-nav >:nth-child(10)").should("have.text"," Logged in as "+user_name)
    cy.get("[href='/delete_account']").click();
    cy.get('[data-qa="account-deleted"] >b').should("have.text","Account Deleted!");

})
Cypress.Commands.add("Login",()=>{
    
})