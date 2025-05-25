import http from '../src/http-common'

export default class loginService {
  async Cadastro(data) {
    const response = await http.post('api/v1/usuario', {
      nome: data.NOME,
      email: data.EMAIL,
      senha: data.SENHA
    });
    return response.data;
  }

  async Login(data) {
    const response = await http.post('api/v1/usuario/login', {
      email: data.EMAIL,
      senha: data.SENHA
    });

  }
}