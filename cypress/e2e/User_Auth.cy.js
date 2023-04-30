const Random_Email = Math.random().toString(36).substring(7) + "@gmail.com";
const Password="Britney123";
const user_name ="Britney";
describe('Verify that User is Authenticated', () => {
  beforeEach(()=>{
    cy.visit("/");
  })
  it('Verify that the user is successfully registered', () => {
    cy.NewResiter_User(Random_Email,Password);
    cy.Delete_Account();
  })
  it('Verify that User Login with correct email and password',()=>{
    cy.NewResiter_User(Random_Email,Password);
    cy.Login(Random_Email,Password);
    cy.Delete_Account();
  })
  it('Verify that User Login with incorrect email and password',()=>{
    cy.Login(Random_Email,Password);
    cy.get(".login-form >form>p").should("have.text","Your email or password is incorrect!");
  })
  it('Verify that User is Successfully Logout User',()=>{
    cy.NewResiter_User(Random_Email,Password);
    cy.Login(Random_Email,Password);
    cy.Logout(user_name);
  })
  it('Register User with existing email',()=>{
    cy.RegisterUser("k8vl8i@gmail.com");
    cy.get(".signup-form>form>p").should("have.text","Email Address already exist!");
  })
  it.only('Contact Us Form',()=>{
    cy.Contact_Us_Form();
  })
})