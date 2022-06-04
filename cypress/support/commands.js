// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
//Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getUser', () => {
    cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users',
   }).then((response) => { 
           expect(response.body).is.not.empty
   })
})

Cypress.Commands.add('getPosts', (userId) => {
    cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/?userId='+userId,
   })
})

Cypress.Commands.add('PostNewRegister', (userid) => {
    cy.request({
        method: 'POST',
        body: {
            "userId": 10,
            "id": 101,
            "title": "cccccccccc",
            "body": "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
          },
        url: 'https://jsonplaceholder.typicode.com/posts',
   })
})