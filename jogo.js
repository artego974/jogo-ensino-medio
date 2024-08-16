let n = 0
let rl = require("readline-sync")

//inv personagem
let progresso = 0
let qualidades = []
let itens = []
//atributos personagem
let ataque = 5
let pontoDeVida = 20
let velocide = 2
let defesa = 2

// qualidades
let coragem = "coragem"
let empatia = "empatia"
let bondade = "bondade"

// essencia das qualidades
let essenciaDeCoragem = "essencia Da Coragem"
let essenciaDeEmpatia = "essencia Da Empatia"
let essenciaDeBondade = "essencia Da Bondade"

//itens
let dinheiro = 0
let comidas = []
let medalhas = 0

// atributos oponetes
let vidaOponente = 20
let defesaOponente = 3

// criação dos dados
let vidaPerdida
let velocidadeDeEsquiva
let qntdataque
let qntdataqueOponente
// mostrar atributo 
function mostrarAtributos() {
    console.log(` ataque:${ataque} \n pontos de vida: ${pontoDeVida} \n velocidade:${velocide}\n defesa:${defesa}`)
}
function danoNoOponente() {
    return vidaOponente = vidaOponente - ataque
    
}

function defenderPersonagem() {
    return pontoDeVida = pontoDeVida - vidaPerdida
    
}


console.log("voce e o jamal vanlizadeh e esta no comeco da sua carreira e ainda mora em seu pais natal(islam) e esta lutando com um adversario\n")

vidaOponente = vidaOponente - ataque

    while(vidaOponente>0){
    // dado
    qntdataque = ~~(Math.random() * 6)
    velocidadeDeEsquiva= ~~(Math.random() * 6)
    vidaPerdida = ~~(Math.random() * 6) 
    qntdataqueOponente = ~~(Math.random() * 6)

    if(vidaOponente == 0){

    }else{
    let opcao =  Number(rl.question("diga-me o que deseja fazer?\n 1)atacar \n 2)defender\n 3)desviar\n"))
    switch (opcao) {
        case 1:
            if(defesaOponente<qntdataque){
                danoNoOponente()
                console.log("seu ataque foi bom porem ele permanece de pé e ele esta com " + vidaOponente + " pontos de vida")

            }
            else{
                console.log("seu ataque foi fraco e não fez nada contra o oponente")
            }
            break;
            
        case 2:
            console.log("saiu ileso")
            break;
        case 3:
            
                console.log("desviou qual seu proximo passo?")

            
            break;

        default:
            console.log("   \n---opção invalida logo perde esta rodada---\n  ")
            break;
        }
    }
}

   
    

progresso++
medalhas++
pontoDeVida = 20
console.log("|----parabens ganhou a batalha----|")
console.log(`agora saiba que depois dessa batalha você desbloqueou outras coisas como: \nprogresso que no momento esta em ${progresso}\n qualidades:${qualidades }\n itens:${itens} \n medalhas:${medalhas}\n E você tambem desbloqueou atributos que são: \n ataque:${ataque} \n pontos de vida: ${pontoDeVida} \n velocidade:${velocide}\n defesa:${defesa}`)
console.log('Para melhorar algo dos seus atributos pode treina-los e progresso é para batalha que você ganhar qualidades você ganha ajudando os npcs e intens é para cada lugar que você explorar então sabendo disso')
while(progresso != 2){
    let menu = Number(rl.question(` diga-me o que deseja fazer? \n 1)treinar \n 2)batalhar \n 3)ajudar algum necessitado\n 4)explorar\n 5)mostrar atributos\n 6)mostrar qualidades\n 7)mostrar itens\n`))
    switch (menu) {
        case 1:
            let treinamento = Number(rl.question("o que deseja treinar?\n1)ataque\n2)ponto de vida\n3)velocidade\n4)defesa\n"))
            if(treinamento == 1 ){
                ataque ++
                mostrarAtributos()
            }
            else if(treinamento == 2){
                pontoDeVida = pontoDeVida + 4
                mostrarAtributos()
            }
            else if(treinamento == 3){
                velocide ++
                mostrarAtributos()
            }
            else if(treinamento == 4){
                defesa ++
                mostrarAtributos()
            }
            break;
        case 2:
            if(n < 1){
                console.log("\nvocê olha para os lados e tenta ajudar algum adversario mas ninguem aparece sugiro que faça algo por enquanto ")
            }else{
                console.log("\napos sua espera alguem finalmente aparece agora vocês começam a batalha")
                
                vidaOponente = 20
                while(vidaOponente > 0){
                if(pontoDeVida > 0 ){
                let opcao =  Number(rl.question("diga-me o que deseja fazer?\n 1)atacar \n 2)defender\n 3)desviar\n"))
        switch (opcao) {
            case 1:
                if(defesaOponente<qntdataque){
                    danoNoOponente()
                    console.log("seu ataque foi bom porem ele permanece de pé e ele esta com " + vidaOponente + " pontos de vida")

                }
                else{
                    console.log("seu ataque foi fraco e não fez nada contra o oponente")
                }
                break;
                
            case 2:
                if(defesa < qntdataqueOponente){
                    defenderPersonagem()
                    console.log("você defendeu os 2 primeiros golpes porem ele te encuralou e de acertou 1 golpe agora você tem "+ pontoDeVida+" pontos de vida")
                }else{
                    console.log("saiu ileso")
                }
                break;
            case 3:
                if(velocide > velocidadeDeEsquiva){
                    console.log("desviou qual seu proximo passo?")

                }else{
                    pontoDeVida = pontoDeVida- vidaPerdida
                    console.log("não conseguiu desviar e tomou "+ vidaPerdida +" pontos de dano agora tem "+ pontoDeVida+" pontos de vida")
                }
                break;

            default:
                console.log("   \n---opção invalida logo perde esta rodada---\n  ")
                break;
            }
        }else{
            console.log("você não tem vida para continuar a batalha")
            let morreu = Number(rl.question("1)sim\n2)nao\n"))
            if(morreu == 1){
                pontoDeVida = 20
                console.log("ok vamos de novo então")
        }else{
            console.log("você perdeu a batalha")
            vidaOponente = 0
        }
    }
}
}
    progresso++
    console.log("|----fim da batalha----|")
                
            break;
        case 3:
            
            console.log("você anda um pouco e acha uma pessoa assustada e tenta se aproximar mas a pessoa se afasta e você percebe que ele estava tremendo e você se lembra de quando seus pais morreram por causa de guerra o que deseja fazer?")
            opcao = Number(rl.question(`1)ajudar \n2)ignorar\n`))
            if(opcao == 1){
                opcao = Number(rl.question("voce pega um pao que tinha para comer e da a esta pessoa e ela te agradece mas continua fragil o que deseja fazer?\n 1)deixar a pessoa \n 2)consolar ela\n"))
                if(opcao == 1){
                    console.log("você se afasta e não ganha nada tendo tempo perdido")
                }else{
                    console.log("você desenvolve empatia e sua essencia após ajudar essa pessoa e ter feito boas ações e caso queira ver suas qualidades selecione abaixo")
                    qualidades.push(empatia)
                    itens.push(essenciaDeEmpatia)
                    n = 1
                }
            }else{
                console.log("você foi frio e passa sem empatia fazendo com que não ganhe nesta rodada alguma qualidade")
            }
            break;
        case 4:
            console.log("você anda um pouco pela sua região e vê algo aos aredores mas nada que não tenha visto antes a unica coisa que mudou foi um ponto brilhoso perto de uma arvore e você se aproxima e tenta entender o que era aquilo mas quando você esta chegando perto escuta um som estrondoso e ensurdecedor e sua unica sensação é de medo e quando se depara com uma mãe e sua filha de colo e quando você vai sem exitar ambas viraram aquela mesma coisa brilando e você ganha uma nova qualidade que é coragem e sua essencia")
            qualidades.push(coragem)
            itens.push(essenciaDeCoragem)

            n = n + 1
            break;
        case 5:
            mostrarAtributos()
             break;
        case 6:
        if(qualidades.length == []){
            console.log("você não tem qualidades ainda")
        }else{
            console.log(qualidades)

        }
        break;
        case 7:
            if(itens.length == []){
                console.log("você não tem itens")
            }else{
                console.log(itens)
            }
        break;
        default:
            console.log("   \n---opção invalida logo perde esta rodada---\n  ")
            break;
    }
}

opcao = rl.questionInt("parabens apos suas 2 lutas epicas e seus atos honoraveis voce ganha acesso a disputar nas olimpiadas voce aceita?\n1)Sim\n2)Nao\n")
while(opcao != 1){
if(opcao == 1){
    console.log("você se prepara para as olimpiadas e quando chega lá acaba derrotando facilmente os outros oponentes e agora está na diputa para a medalha de ouro tenha atenção e faça de tudo para ganhar!!")
    vidaOponente = 20
                while(vidaOponente > 0){
                if(pontoDeVida > 0 ){
                let opcao =  Number(rl.question("agora diga-me o que deseja fazer?\n 1)atacar \n 2)defender\n 3)desviar\n"))
        switch (opcao) {
            case 1:
                if(defesaOponente<qntdataque){
                    danoNoOponente()
                    console.log("seu ataque foi bom porem ele permanece de pé e ele esta com " + vidaOponente + " pontos de vida")

                }
                else{
                    console.log("seu ataque foi fraco e não fez nada contra o oponente")
                }
                break;
                
            case 2:
                if(defesa < qntdataqueOponente){
                    defenderPersonagem()
                    console.log("você defendeu os 2 primeiros golpes porem ele te encuralou e de acertou 1 golpe agora você tem "+ pontoDeVida+" pontos de vida")
                }else{
                    console.log("saiu ileso")
                }
                break;
            case 3:
                if(velocide > velocidadeDeEsquiva){
                    console.log("desviou qual seu proximo passo?")

                }else{
                    pontoDeVida = pontoDeVida- vidaPerdida
                    console.log("não conseguiu desviar e tomou "+ vidaPerdida +" pontos de dano agora tem "+ pontoDeVida+" pontos de vida")
                }
                break;

            default:
                console.log("   \n---opção invalida logo perde esta rodada---\n  ")
                break;
            }
        }else{
            console.log("você não tem vida para continuar a batalha")
            let morreu = Number(rl.question("1)sim\n2)nao\n"))
            if(morreu == 1){
                pontoDeVida = 20
                console.log("ok vamos de novo então")
        }else{
            console.log("você perdeu a batalha")
            vidaOponente = 0
        }
    }
}

    progresso++

}else{
    console.log("pessoas ao seu lado te apoiam e você muda de ideia")
}
}
opcao = rl.questionInt("apos você quase derrotar o oponente ele pede para se render, voce continua batendo ou deixa ele?\n1)deixar ele\n2)bater nele\n")
if(opcao == 1){
    dinheiro = 32000
    medalhas = 2
    qualidades.push(bondade)
    itens.push(essenciaDeBondade)
    console.log("você deixa ele ir embora e ganha a batalha e ganha sua medalha e dinheiro e ganha honestidade e sua essencia")
    }else{
        dinheiro = 30000
        medalhas = 1
        console.log("voce ganha a batalha porem de um forma covarde e ganha sua medalha e dinheiro")
    }

opcao = rl.questionInt("voce em volta para casa mas tem a noticia da guerra e decide se refugiar em algum lugar por perto qual das pousadas deseja?\n1)pousada barata 1000$$\n2)pousada media 2000$$\n3)pousada cara 5000$$\n")
switch (opcao) {
case 1:
    dinheiro = dinheiro - 1000
    pontoDeVida = pontoDeVida - 5
    opcao = rl.questionInt(`voce escolheu a pousada barata e por barata foi desconfortavel e teve incomodos na noite alem de ter comido coisas estragadas na pousada e agora esta com ${dinheiro}$$ e com ${pontoDeVida} pontos de vida\n deseja sair para ir embora? \n1)sim \n2)nao\n`)
    while(opcao != 2){
        opcao = rl.questionInt(`voce escolheu a pousada barata e por barata foi desconfortavel e teve incomodos na noite alem de ter comido coisas estragadas na pousada e agora esta com ${dinheiro}$$ e com ${pontoDeVida} pontos de vida\n deseja sair para ir embora? \n1)sim \n2)nao\n`)
            if(opcao == 1){
                console.log("você sai e acaba morrendo por uma bala perdida na guerra")
    
            }else{
                console.log("você faz uma boa escolha pois minutos depois começa dar problemas na rua")
            }

        }
        break;
    case 2:
        dinheiro = dinheiro - 2000
        
        console.log("voce escolheu a pousada media ela foi um lugar normal nada alem do comum e teve uma comida nada alem do normal mas percebe que deve ficar mais um pouca na pousada por ter barulho de guerra ainda e esta com "+ dinheiro + "$$\n \n após um tempo escuta um estrondo e percebe que fez uma boa escolha mas que deve fugir exatamente quando a poeira baixar\n")

        break;
    case 3:
        dinheiro = dinheiro - 5000
        pontoDeVida = pontoDeVida + 5
        console.log(`voce escolheu a cara a pousada cara teve comidas de qualidade e uma cama extremamente confortavel e viu que nas noticias da pousada a guerra vai demorar por um bom tempo ainda e esta com ${pontoDeVida} pontos de vida e ${dinheiro}\n Com cada vez mais noticias de algo dar arrepio e cala frios mas sabe que deve sair e com extrema cautela\n`)

        break;

    default:
        console.log("opção invalida")
        break;
}
opcao = rl.questionInt("Apos a poeira baixar você escapa e vai para o aeroporto e vai para o brasil ter uma vida normal e apoveita sua vida mas pode investir no seu futuro ou ir para a farra qual deseja?\n1)investir no seu futuro\n2)farra\n")

if(opcao == 1){
    console.log("você investe no seu futuro e acaba se tornando um empresario e tem uma vida digna que acaba com seus 70 anos") 
    dinheiro = dinheiro + 100000
}else{
    console.log("você vai para a farra e acaba morrendo aos 30 tendo morrido de overdose e tendo um fim tragico sem ninguem para te acompanhar")
    dinheiro = dinheiro - 300000
}
console.log(`
------------------------------------------
|              fim do jogo                |
|  você terminou o jogo com ${dinheiro}$$ |
|  e ${pontoDeVida} pontos de vida        |
|  teve ${qualidades} qualidades e        |
|  teve ${itens} essencias de qualidade   |
|  creditos: arthur cidade mattjie        |
------------------------------------------
`)