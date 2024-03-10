export class LoginPanel{
   user_text= ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
   pas_text=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
   login_button='.oxd-button'
enterUsername(username){
    cy.get(this.user_text).type(username)
}
enterPassword(password){
    cy.get(this.pas_text).type(password)
}
clickLogin(){
    cy.get(this.login_button).click()
}
}

