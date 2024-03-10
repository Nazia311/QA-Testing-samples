//Testing login page//
import {LoginPanel} from "./page/login_page"
const loginPanel = new LoginPanel
beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})
describe("All login test", function(){
        
        
//testing with valid username//

    it('Test1 login', function(){

        loginPanel.enterUsername('Admin')
        loginPanel.enterPassword('admin123')
        loginPanel.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()
    
    })
//testing with invalid username//
    it('Test2 login', function(){
    
        loginPanel.enterUsername('Adminss')
        loginPanel.enterPassword('admin123')
        loginPanel.clickLogin()
        cy.get('.oxd-userdropdown-tab').click()  
    }
    )


})
//invalid password
it('Test3 login', function(){
    
    loginPanel.enterUsername('Admins')
    loginPanel.enterPassword('admin1111123')
    loginPanel.clickLogin()
    cy.get('.oxd-userdropdown-tab').click()   
    }
)