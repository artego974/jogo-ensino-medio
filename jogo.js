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


// atributos oponetes
let vidaOponente = 20
let defesaOponente = 3

// criação dos dados
let vidaPerdida
let velocidadeDeEsquiva
let qntdataque
let qntdataqueOponente

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
}
progresso++
console.log("|----parabens ganhou a batalha----|")
console.log(`agora saiba que depois dessa batalha você desbloqueou outras coisas como: \nprogresso que no momento esta em ${progresso}\n qualidades:${qualidades }\n itens:${itens} \n E você tambem desbloqueou atributos que são: \n ataque:${ataque} \n pontos de vida: ${pontoDeVida} \n velocidade:${velocide}\n defesa:${defesa}`)
console.log('Para melhorar algo dos seus atributos pode treina-los e progresso é para batalha que você ganhar qualidades você ganha ajudando os npcs e intens é para cada lugar que você explorar então sabendo disso')
while(progresso != 2){
    let n = 0
    let menu = Number(rl.question(` diga-me o que deseja fazer? \n 1)treinar \n 2)batalhar \n 3)ajudar algum necessitado\n 4)explorar\n`))
    switch (menu) {
        case 1:
            let treinamento = Number(rl.question("oq deseja treinar?\n1)ataque\n2)ponto de vida\n3)velocidade\n4)defesa\n"))
            if(treinamento == 1 ){
                ataque ++
            }
            else if(treinamento == 2){
                pontoDeVida = pontoDeVida + 4

            }
            else if(treinamento == 3){
                velocide ++
                
            }
            else if(treinamento == 4){
                defesa ++
                
            }
            break;
        case 2:
            if(n < 1){
                console.log("você olha para os lados e tenta ajudar algum adversario mas ninguem aparece sugiro que faça algo por enquanto ")
            }else{
                console.log("apos sua espera alguem finalmente aparece agora vocês começam a batalha\n")
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
}
progresso++
console.log("|----parabens ganhou a batalha----|")
            
            break;
        case 3:
            console.log("você anda um pouco e acha uma pessoa assustada e tenta se aproximar mas a pessoa se afasta e você percebe que ele estava tremendo e você se lembra de quando seus pais morreram por causa de guerra o que deseja fazer?")
            opcao = Number(rl.question(`1) ajudar \n 2)ignorar`))
            if(opcao == 1){
                opcao = Number(rl.question("você pega um pão que tinha para comer e da a esta pessoa e ela te agradece mas continua fragil o que deseja fazer?\n 1)deixar a pessoa \n 2)consolar ela"))
                if(opcao == 1){
                    console.log("você se afasta e não ganha nd")
                }else{

                }
            }else{
                console.log("você foi frio e passa sem empatia fazendo com que não ganhe nesta rodada alguma qualidade")
            }
            break;
        case 4:
            
            break;
    
        default:
            console.log("   \n---opção invalida logo perde esta rodada---\n  ")
            break;
    }
}
