/// <reference types = "cypress"/>

function atualizarUsuario(idUsuario, setNomeUsuario) {
    var atualizarUser = `
    mutation {
        update_users(where: {id: {_eq: \"${idUsuario}\"}}, _set: {name: "${setNomeUsuario}"}) {
          returning {
            id
            name
          }
        }
      }
    `
    return cy.request({
        method: 'POST',
        url: '/',
        body: {
            query: atualizarUser
        },
        failOnStatusCode: false,
    });
};
export { atualizarUsuario }