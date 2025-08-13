import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3010/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) { }

  //função para registrar um novo usuário
  registrar(usuario: any):Observable<any> {
    //antes de registrar -> verificar se o usuário já está cadastrado
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(res => {
        //se o email já existe
        if (res.length > 0){
          //criando um erro para o sistema -> para que o erro seja tratado, rodar a função dentro de um try/catch
          return throwError(()=>new Error("Usuário já cadastrado!"));// para o programa aqui, se usuário já existir
        }
        //caso contrário -> cadastrar o usuário novo
        return this.http.post<any>(this.apiUrl, usuario);
      })
    );
  }

  //função para logar o usuário
  login(credenciais: any):Observable<boolean> {
    return this.http.get<any[]>(
      //passar o email e a senha para procurar o usuário no BD
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
      map(usuario => {
        //usuário encontrado
        if (usuario.length>0) {
          //grava no armazenamento interno do navegador(a chave de autenticação e as informações do usuário)
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario[0]));
          return true;
        }
        //caso não seja encontrado -> retorna falso
        return false;
      })
    )
  }

  // função de logout
  logout(){
    //limpo o armazenamento interno
    localStorage.removeItem(this.CHAVE_AUTH);
    //redireciona para a tela de login/home
    this.router.navigate(["/login"]);
  }
  //função para verificar se o usuário está autenticado
  estaAutenticado(): boolean {
    //uso de dupla negação => transformo em uma booleana
    //!! -> se retornar vazio -> falso, agora se retornar texto -> é true
    return !!localStorage.getItem(this.CHAVE_AUTH);
  }

  //função para pegar informações do usuário
  usuarioAtual(): any{
    //converte para json as informações do usuário
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || "{}")
  }

}
