/// <reference types = "cypress"/>

function atualizarUsuario(nomeUsuario) {
    var atualizarUser = `
    mutation {
        update_users(_set: {name: "Davison"}, where: {name: {_eq: "${nomeUsuario}"}}) {
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
            query: atualizarUser
        },
        failOnStatusCode: false,
    });
}
export { atualizarUsuario }