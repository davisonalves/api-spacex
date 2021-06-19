/// <reference types = "cypress"/>
function deletarUsuario(idUsuario) {
    var deletarUser = `
    mutation {
        delete_users(where: {id: {_eq: \"${idUsuario}\"}}) {
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
            query: deletarUser
        },
        failOnStatusCode: false,
    });
};
export { deletarUsuario }