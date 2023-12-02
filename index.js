
class heroi

    let (nome, idade, tipo)

    this.nome = nome;
    
    this.idade = idade;

    this. tipo = tipo;

    atacar ();
    
    {

        let ataque;

        switch (this.tipo) {

            case "mago":

            ataque = "usou magia";

            break;

            case "guerreiro":
            
            ataque = "usou espada";

            break;

            case "monge":

            ataque = "usou artes marciais";

            break;

            case "ninja":

            ataque = "usou shuriken";

            break;
        
        }

        console.log ("O ninja atacou usando shuriken");
         
    }

    const heroi = new heroi(" Kushina Uzumaki",28, "ninja")
    heroi.atacar();

        
    