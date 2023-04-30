const expected_url = "https://automationexercise.com/";
const expectedTexts = ['Category: Women > Tops', 'Availability: In Stock',
 'Condition: New', 'Brand: Polo'];
Cypress.Commands.add("Verify_Product_Detail_Page", () => {
    cy.get(".nav-justified").first().click();
    cy.url().should("eq", "https://automationexercise.com/product_details/1");
    cy.get(".product-information").should("be.visible")
    cy.get('.product-information>h2').invoke('text').then(text => {
        expect(text).to.equal('Blue Top');
    });
    cy.get(".product-information>span>span").invoke('text').then(text => {
        expect(text).to.equal('Rs. 500');
    });
    cy.get('.product-information>p').each(($li, index) => {
        cy.wrap($li).should('have.text', expectedTexts[index]);
    });
})
Cypress.Commands.add("Search_Product",()=>{
    
})
