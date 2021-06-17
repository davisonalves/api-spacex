it('Consulta usuários', () => {
    var queryUsers = `
{
    users {
      id
    }
}
`
cy.request({
    method: 'POST',
    url: 'https://api.spacex.land/graphql/',
    body: {
        query: queryUsers
    }
})
});
