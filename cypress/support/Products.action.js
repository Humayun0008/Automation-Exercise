const expected_url = "https://automationexercise.com/";
const expectedTexts = ['Category: Women > Tops', 'Availability: In Stock',
    'Condition: New', 'Brand: Polo'];
const expectedprice = ['Rs. 500', 'Rs. 400'];
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
Cypress.Commands.add("Search_Product", () => {
    cy.SelectandTypeData("#search_product", "Blue Top");
    cy.get("#submit_search").click();
    cy.get(".title.text-center").should("have.text", "Searched Products");
    cy.get(".overlay-content>p").should("have.text", "Blue Top");
})
Cypress.Commands.add("Add_Product_in_Cart", () => {
    cy.get(".overlay-content>a").first().click({ force: true });
    cy.get('[data-dismiss="modal"]').click();
    cy.get('.overlay-content>a[data-product-id="2"]').click({ force: true });
    cy.get(".modal-body >p>a").click();
})
Cypress.Commands.add("Validate_Cart_Product",()=>{
    cy.fixture('cart_validation').then((cartvalue) => {
        cartvalue.selectorsAndPrices.forEach((item) => {
            cy.get(item.selector).each(($li, index) => {
                cy.wrap($li).should('have.text', item.prices[index]);
            });
        });
    })
})
Cypress.Commands.add("Remove_Product_from_Cart", () => {
    cy.get('.active').should("be.visible");
    cy.get('.cart_quantity_delete').click({multiple:true});
    cy.get('#empty_cart > .text-center').should("have.text","Cart is empty! Click here to buy products.");
})
Cypress.Commands.add("Verify_cart_beforelogin",()=>{
    cy.get(".overlay-content>a").first().click({ force: true });
    cy.get(".modal-body >p>a").click();
    cy.get("#cart_info_table>tbody>tr>td>h4").should("have.length", "1")
    cy.get("#cart_info_table>tbody>tr>td>h4").should("have.text","Blue Top")
    cy.get('.nav > :nth-child(1) > a').click();
})
Cypress.Commands.add("Verify_cart_afterlogin",()=>{
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get("#cart_info_table>tbody>tr>td>h4").should("have.length", "1");
    cy.get("#cart_info_table>tbody>tr>td>h4").should("have.text","Blue Top");
})
