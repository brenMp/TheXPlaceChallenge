/// <reference types="cypress" />

let randomUserId
describe('API TESTS', () => {
    before(() => {
        let max=9
        cy.task("randomNumber", max ).then(number => {
            randomUserId = number 
            })  
    })
    it('Should print email address', () => {

      cy.getUser().then( res => {
          let userId = randomUserId + 1
          cy.log('User Id: ' + userId)
          cy.log('User email: ' + res.body[randomUserId].email)
      })
    })

    it('Should get post ids between 1 and 100', () => {

        cy.getPosts().then( res => {
            let userId = randomUserId + 1
            cy.getPosts(userId).then( (res) => {
                let lengthArray = res.body.length
                let max = lengthArray
                cy.task("randomNumber", max).then( number => {
                    expect(res.body[number].id).to.be.within(1,100)
                })
                });
            })
        })
    
      it('Should post a new register', () => {

        cy.PostNewRegister().then( res => {
            expect(res.status).to.not.eq(200)
        })
      })
})