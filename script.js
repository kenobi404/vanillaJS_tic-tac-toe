const boxes = document.querySelectorAll('.box');
const player = document.querySelector('.player');
let represtativeArray = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
let playerTurn = 1;

const restartButton = document.querySelector('.restart');
const overlayConatiner = document.querySelector('.overlay')
const result = document.querySelector('.result')



function isDraw(){
    for(let i=0;i<represtativeArray.length;i++){
        if(represtativeArray[i]==-1){
            return false;
        }
    }
    return true;
}
function isWon() {
    if(represtativeArray[0] === represtativeArray[1] && represtativeArray[1] === represtativeArray[2] && represtativeArray[2] != -1){
        return true;
    }else if(represtativeArray[3] === represtativeArray[4] && represtativeArray[4] === represtativeArray[5] && represtativeArray[5] != -1){
        return true
    }
    else if(represtativeArray[6] === represtativeArray[7] && represtativeArray[7] === represtativeArray[8] && represtativeArray[8] != -1){
        return true;
    }
    else if(represtativeArray[0] === represtativeArray[3] && represtativeArray[3] === represtativeArray[6] && represtativeArray[6] != -1){
        return true;
    }
    else if(represtativeArray[1] === represtativeArray[4] && represtativeArray[4] === represtativeArray[7] && represtativeArray[7] != -1){
        return true;
    }
    else if(represtativeArray[2] === represtativeArray[5] && represtativeArray[5] === represtativeArray[8] && represtativeArray[8] != -1){
        return true;
    }
    else if(represtativeArray[0] === represtativeArray[4] && represtativeArray[4] === represtativeArray[8] && represtativeArray[8] != -1){
        return true;
    }
    else if(represtativeArray[2] === represtativeArray[4] && represtativeArray[4] === represtativeArray[6] && represtativeArray[6] != -1){
        return true;
    }

    else return false;

}
function restart() {
    const icons = document.querySelectorAll('i');
    icons.forEach((icon) => {
        if(icon.classList.contains('fa-0')){
            icon.classList.remove('fa-0')
        }
        if(icon.classList.contains('fa-xmark')){
            icon.classList.remove('fa-xmark')
        }

    })

    for(let i =0;i< represtativeArray.length;i++){
        represtativeArray[i] = -1;
    }

    playerTurn = 1;
    player.textContent = "Player - X";

    overlayConatiner.classList.remove('show-result');
}

function showResult(resultText){
    result.textContent = resultText;
    overlayConatiner.classList.add('show-result');
}







boxes.forEach((box) => {
    box.addEventListener('click',(e) => {
        const triggerdBox = Number(e.currentTarget.getAttribute('id'));
        if(represtativeArray[triggerdBox] === -1){
            const triggerdElement = e.currentTarget.querySelector('i');
            if(playerTurn === 1){
                triggerdElement.classList.add('fa-xmark')
                represtativeArray[triggerdBox] = 1;
                if(isWon()){
                   
                    showResult("Player (X) Won");
                }else {

                    player.textContent = "Player - O"
                    playerTurn = 2;
                    if(isDraw()){
                        showResult("Game Dram");
                    }
                }

            }
            else if(playerTurn === 2){
                triggerdElement.classList.add('fa-0');
                represtativeArray[triggerdBox] = 2;
                if(isWon()){
                  
                    showResult("Player (O) Won")
                }
                else {

                    player.textContent = "Player - X ";
                    playerTurn = 1;
                    if(isDraw()){
                        showResult("Game Draw");
                    }
                }
            }
            
        }
    })
})

restartButton.addEventListener('click',restart);