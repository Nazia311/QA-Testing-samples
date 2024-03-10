//it will read only from jason file
///<"reference_types"="cypress"/>

it('Using jason', function(){
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   cy.fixture('example.json').then((data) => {
   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username)
   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)
   cy.get('.oxd-button').click()
   //will login and go to admin panel
   cy.get(':nth-child(1) > .oxd-main-menu-item').click()
   cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
   //will click to qualification and then skills
   cy.contains('Skills').click()
   })

}
)
//it will read file
it('Read file', function(){
  cy.readFile('/home/promi/new/cypress/cypress/fixtures/example.json').then((data) =>{
    cy.log(data.name)
  })
})

//it will write file
it('Write File',function(){
    cy.writeFile('text.txt' , "Welcome to the project.\n")
    cy.writeFile('text.txt', "This is a demo project", {flag:'a+'})
}
)