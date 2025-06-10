export class Curriculo {
    // atributos privados
    constructor(
        private _nome: string,
        private _idade: number,
        private _email: string,
        private _experiencias: string,
        private _habilidades: string
    ) {}

    // getters e setters

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get idade(): number {
        return this._idade;
    }
    public set idade(value: number) {
        this._idade = value;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get experiencias(): string {
        return this._experiencias;
    }
    public set experiencias(value: string) {
        this._experiencias = value;
    }

    public get habilidades(): string {
        return this._habilidades;
    }
    public set habilidades(value: string) {
        this._habilidades = value;
    }

    // Métodos de conversão de objetos
    // Obj => Json
    public toMap(): { [key: string]: any } {
        return {
            nome: this._nome,
            idade: this._idade,
            email: this._email,
            experiencias: this._experiencias,
            habilidades: this._habilidades
        };
    }

    // Json => Obj
    static fromMap(map: any): Curriculo {
        return new Curriculo(
            map.nome,
            map.idade,
            map.email,
            map.experiencias,
            map.habilidades
        );
    }
}