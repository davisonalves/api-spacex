/// <reference types = "cypress"/>

function todosUsuarios() {
    var consultaUsers = `
    {
        users {
          name
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
    });
}
export { todosUsuarios }