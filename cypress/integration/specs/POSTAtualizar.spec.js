import * as POSTAtualizar from '../requests/POSTAtualizar'
import * as POSTConsultar from '../requests/POSTConsultar'

describe('POST Atualizar', () => {
    it('Atualizar um usuário existente', () => {
        POSTConsultar.todosUsuarios().then((resTodosUsuarios) => {
            POSTAtualizar.atualizarUsuario(resTodosUsuarios.body.data.users[Math.floor(Math.random()* 10 + 1)].name).should((resAtualizarUsuario) => {
                expect(resAtualizarUsuario.status).to.eq(200);
                expect(resTodosUsuarios.body.data.users[0].name).to.eq('Davison');
            })
        })
    });
});