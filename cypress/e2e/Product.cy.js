const Random_Email = Math.random().toString(36).substring(7) + "@gmail.com";
const Password="Britney123";
describe('Verify All Products', () => {
    beforeEach(() => {
        cy.visit("/");
    })
    it("Verify All Products and product detail page", () => {
        cy.All_Product_Page();
        cy.Verify_Product_Detail_Page();
    })
    it("Verify that Product is Search Successfully", () => {
        cy.All_Product_Page();
        cy.Search_Product();
    })
    it("Verify that Products is Successfully added in Cart", () => {
        cy.All_Product_Page();
        cy.Add_Product_in_Cart();
        cy.get("#cart_info_table>tbody>tr>td>h4").should("have.length", "2")
        cy.Validate_Cart_Product();
    })
    it("Verify that the Products is Successfully Removed from Cart",()=>{
        cy.All_Product_Page();
        cy.Add_Product_in_Cart();
        cy.Remove_Product_from_Cart();
    })
    it("Search Products and Verify cart after login",()=>{
        cy.All_Product_Page();
        cy.Search_Product();
        cy.Verify_cart_beforelogin();
        cy.NewResiter_User(Random_Email,Password);
        cy.Login(Random_Email,Password);
        cy.Verify_cart_afterlogin();
    })
})