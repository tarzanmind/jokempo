let itens = ['pedra', 'papel', 'tesoura'];

let result = document.getElementById("result");


function rockClicked() {
    return getWinPlayer('pedra');
}

function paperClicked() {
    return getWinPlayer('papel');
}

function scissorClicked() {
    return getWinPlayer('tesoura');
}

function getRobotJokempo() {
    const robotChoiced = Math.ceil(Math.random() * 3); 
    const index = robotChoiced - 1;
    return itens[index];
}

function getWinPlayer(playerChoice) {
    const robotChoiced = getRobotJokempo();
    const paragrafo = document.getElementById('result');
            

   
    if (playerChoice === robotChoiced) {
        result.innerText = `Empate! O robô escolheu ${robotChoiced}.`;
        paragrafo.className = 'cinza';
        return;
    } else {
        
        const playerLose =
            (playerChoice === "pedra" && robotChoiced === "papel") ||
            (playerChoice === "papel" && robotChoiced === "tesoura") ||
            (playerChoice === "tesoura" && robotChoiced === "pedra");

        if (playerLose) {
            
            result.innerText = `Você perdeu! O robô escolheu ${robotChoiced}.`;
            paragrafo.className = 'vermelho';
            
        } else {
            
            result.innerText = `Você ganhou! O robô escolheu ${robotChoiced}.`;
            paragrafo.className = 'verde';
        }
    }
}
