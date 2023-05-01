const Random_Email = Math.random().toString(36).substring(7) + "@gmail.com";
const Password="Britney123";
const user_name ="Britney";
describe('Place Order', () => {
    beforeEach(() => {
        cy.visit("/");
    })
    it("Verify User is Successfully Register while Checkout",()=>{
        cy.url().should("eq", "https://automationexercise.com/");
        cy.Add_Product_in_Cart();
        cy.Validate_Cart_Product();
        cy.RegisterUser_WhileCheckout();
        cy.Payment_Method();
        cy.Delete_Account();
    })
    it("Verify User is Successfully Register before Checkout",()=>{
        cy.NewResiter_User(Random_Email,Password);
        cy.get(".navbar-nav >:nth-child(10)").should("have.text"," Logged in as "+user_name);
        cy.Add_Product_in_Cart();
        cy.Validate_Cart_Product();
        cy.Checkout_Page();
        cy.Payment_Method();
        cy.Delete_Account();
    })
    it("Verify User is Successfully Login before Checkout",()=>{
        cy.NewResiter_User(Random_Email,Password);
        cy.Login(Random_Email,Password);
        cy.get(".navbar-nav >:nth-child(10)").should("have.text"," Logged in as "+user_name);
        cy.Add_Product_in_Cart();
        cy.Validate_Cart_Product();
        cy.Checkout_Page();
        cy.Payment_Method();
        cy.Delete_Account();
    })

})