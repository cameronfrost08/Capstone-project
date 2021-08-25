const readlinesync= require ('readline-sync');
//outsource of code
const name = readlinesync.question('Whats your name?')

readlinesync.question('Hello there'+name+'Welcome to my role playing game where you will make life or death decisions. Press space to begin your journey, and Good Luck;)');
// intro to the game

const enemies=['Devil, killer frost, demon angel, cyborg, hadies'];//the bad guys you may face
const loot=['bandage, sheild, Speedster shoes, helmet'];//the list of items that can help succeed in your fights and or beat the game
let playerHealth=50
const prize= [];
const options=['move','Leave','print'];//list of options inside the game
let collect=loot[Math.floor(math.random()*loot.length)];

function game(){
    const attackForce=math.floor(math.random()*(5 -4+3)+5);
    const enemy =enemies[math.floor(math.random()*enemies.length)];
    let enemiesHealth=50
    const enemiesStrength=math.floor(math.random()* (5 -3+2)+5);
    
    const index= readlinesync.keyInSelect(options,'Whats your next move?')

    if (options[index]== 'leave'){
        return playerHealth=0;
    }else if (options[index]=='print'){
        console.log(name +'\n'+ playerHealth+'\nloot'+ collect);
    }else if (options[index]=='move'){
        let key=math.random();
        if (key<=.3){
            console.log('moving')
        }else if (key>= .3){
            console.log(enemy+'Has arrived');

            while (enemiesHealth>0 && playerHealth>0){

                const player= readlinesync.question('You have two options here, enter "f" to stay and fight or, enter "e" to evade the fight');
                
                switch (player){
                    case'e'://evade the fight 
                    const evade =math.random();
                    if (evade<.5){
                        console.log('before you can evade '+enemy+'Hits you with '+enemiesStrength);
                    }else {
                        console.log("you evaded the fight");
                        break;
                    }

                    case 'f'://stay and fight
                    enemiesHealth -= attackForce;
                    console.log ('you have attacked'+enemy+'with'+attackForce+'attack force')//player attacked the enemy
                    
                    playerHealth -= enemiesStrength;
                    console.log('the enemy has attacked you with'+enemiesStrength+'attack force');//enemy has attacked the player

                    if (enemiesHealth<=0){
                        console.log('you have just defeated'+enemy+'.\n'+enemy+collect);
                        let loot=math.random();
                        if (loot <=.3){
                            prize.push(collect);
                        }
                    }else if (playerHealth <-0){
                        console.log(enemy+ 'Has defeated you, game over');
                    }
                }
            }
        }
    }
    
}
while(playerHealth>0){
    game();
}

