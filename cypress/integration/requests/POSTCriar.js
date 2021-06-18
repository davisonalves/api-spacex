/// <reference types = "cypress"/>

function criarUsuario() {
    var criarUser = `
    mutation {
        insert_users(objects: {name: "Davison"}) {
          returning {
            name
            }
        }
    }
    `
    return cy.request({
        method: 'POST',
        url: 'https://api.spacex.land/graphql/',
        body: {
            query: criarUser,
        },
        failOnStatusCode: false,
    });
}
export { criarUsuario }