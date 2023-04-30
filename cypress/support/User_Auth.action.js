const expected_url = "https://automationexercise.com/";
const user_name = "Britney";
Cypress.Commands.add("NewResiter_User", (Email, password) => {
    cy.RegisterUser(Email);
    cy.get(".title.text-center").first().should("exist")
    cy.get("#id_gender1").click();
    cy.SelectandTypeData("#password", password);
    cy.get("#days").select("5");
    cy.get("#months").select("4");
    cy.get("#years").select("2015");
    cy.get("#newsletter").click();
    cy.get("#optin").click();
    cy.SelectandTypeData("#first_name", "Britney");
    cy.SelectandTypeData("#last_name", "Fisher");
    cy.SelectandTypeData("#company", "Contour");
    cy.SelectandTypeData("#address1", "Silicon Valley");
    cy.get("#country").select("India");
    cy.SelectandTypeData("#state", "Punjab");
    cy.SelectandTypeData("#city", "Lahore");
    cy.SelectandTypeData("#zipcode", "54000");
    cy.SelectandTypeData("#mobile_number", "03013324144");
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should("have.text", "Account Created!");
    cy.get('[data-qa="continue-button"]').click();
})
Cypress.Commands.add("Login", (Email, password) => {
    cy.url().should("eq", expected_url);
    cy.get(".navbar-nav > :nth-child(4)").click();
    cy.get(".login-form>h2").should("have.text", "Login to your account");
    cy.SelectandTypeData('[data-qa="login-email"]', Email);
    cy.SelectandTypeData('[data-qa="login-password"]', password);
    cy.get('[data-qa="login-button"]').click();
})
Cypress.Commands.add("Logout", (Username) => {
    cy.get(".navbar-nav >:nth-child(10)").should("have.text", " Logged in as " + Username)
    cy.get(".navbar-nav > :nth-child(4)").click();
    cy.get(".login-form>h2").should("have.text", "Login to your account");
})
Cypress.Commands.add("RegisterUser", (R_Email) => {
    cy.url().should("eq", expected_url)
    cy.get(".navbar-nav > :nth-child(4)").click()
    cy.contains("New User Signup!").should("exist")
    cy.SelectandTypeData("[data-qa='signup-name']", user_name)
    cy.SelectandTypeData("[data-qa='signup-email']", R_Email)
    cy.get("[data-qa='signup-button']").click()
})
Cypress.Commands.add("Contact_Us_Form", () => {
    cy.url().should("eq", expected_url);
    cy.get(".navbar-nav>:nth-child(8)>a").click();
    cy.get("div.col-sm-8 > div > h2").should("have.text", "Get In Touch");
    cy.SelectandTypeData('[data-qa="name"]', "Britney");
    cy.SelectandTypeData('[data-qa="email"]', "Britney@gmail.com");
    cy.SelectandTypeData('[data-qa="subject"]', "Checkout is Not Working");
    cy.SelectandTypeData('#message', "Checkout button is not working and i am unable to to buy the Product");
    cy.get('input[type=file]').selectFile('cypress/fixtures/gilgit-baltistan.jpg');
    cy.get('[data-qa="submit-button"]').click();
    cy.get(".alert.alert-success").first().should("have.text","Success! Your details have been submitted successfully.");
    cy.get(".btn.btn-success").click();
    cy.url().should("eq", expected_url);
})