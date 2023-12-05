class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;
        switch(this.tipo){
            case "mago":
                ataque = "magia"
                break

            case "guerreiro":
                ataque = "espada"
                break

            case "monge":
                ataque = "artes marciais"
                break

            case "ninja":
                ataque = "shuriken"
                break

            default:
                ataque = "ataque desconhecido"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

// Exemplos de uso

const jogador1 = new Heroi("Doutor Estranho", 45, "mago")
jogador1.atacar()

const jogador2 = new Heroi("Genghis Khan", 52, "guerreiro")
jogador2.atacar()