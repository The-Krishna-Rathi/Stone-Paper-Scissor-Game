let s,e;
s = performance.now();
const userScore = document.querySelector('#user_score');
const compScore = document.querySelector('#comp_score');
const result = document.querySelector("#res");
const userChoices = document.querySelectorAll('.choice');

let s1=0, s2=0;

for(let i=0;i<userChoices.length;i++){
    userChoices[i].addEventListener('click',function(e){
        //check jitne ka status
        const win = check(i);

        //border ka color change according to winner and score updation
        if(win===1){
            userChoices[i].style.border = " 4px solid green";
            s1++;
            userScore.textContent = s1;
        }
        else if(win == -1){
            userChoices[i].style.border = " 4px solid red";
            s2++;
            compScore.textContent = s2;
        }
        else{
            userChoices[i].style.border = " 4px solid yellow";
        }
        setTimeout(() => {userChoices[i].style.border = " 3px solid white";}, 400);
        
    });
}

function check(user_s){
    const comp_s = Math.floor(Math.random()*3);

    const aujar = ["rock", "paper", "scissor"];
    //0 for rock
    //1 for paper
    //2 for scissor
    console.log(`Computer Score = ${comp_s} and User Score = ${user_s}`);

    let ans = 0;
    if(user_s == comp_s){
        ans = 0;
    }
    else if((user_s == 0 && comp_s==2) || (user_s==1 && comp_s==0) || (user_s==2 && comp_s==1)) ans = 1;
    else ans = -1;

    //Text Updation
    if(ans===1) result.textContent = `${aujar[user_s]}(user) beats ${aujar[comp_s]}(Comp). You Win!`;
    else if(ans==-1) result.textContent = `${aujar[comp_s]}(Comp) beats ${aujar[user_s]}(user). You Loose!`;
    else result.textContent = `${aujar[comp_s]} is equal ${aujar[user_s]}(user). It's a Draw!`;
    return ans;
}
e = performance.now();
console.log(`Performance of My app is ${e-s}`);

