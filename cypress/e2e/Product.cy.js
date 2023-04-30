describe('Verify All Products', () => {
    beforeEach(() => {
        cy.visit("/");
    })
    it("Verify All Products and product detail page",()=>{
        cy.All_Product_Page();
        cy.Verify_Product_Detail_Page();
    })
    it("Verify that Product is Search Successfully",()=>{
        cy.All_Product_Page();

    })
})