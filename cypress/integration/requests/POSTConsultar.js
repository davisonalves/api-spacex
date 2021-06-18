it('Consulta usuários', () => {
    var consultaUsers = `
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
        query: consultaUsers
    }
})
});
