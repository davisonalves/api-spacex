/// <reference types = "cypress"/>

function todosUsuarios(params) {
    var consultaUsers = `
    {
        users {
          id
        }
    }
    `
    return cy.request({
        method: 'POST',
        url: 'https://api.spacex.land/graphql/',
        body: {
            query: consultaUsers
        },
        failOnStatusCode: false,
    })
}
export { todosUsuarios }