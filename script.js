let unreads=document.querySelectorAll(".unread");
let markRead=document.querySelector("#read");
let notifNum=document.querySelector("#number");

for (let item of unreads){
    item.addEventListener('click', function myFunc() {
        makeRead(item)
        item.removeEventListener("click", myFunc);
    })
}

markRead.addEventListener('click', function () {
    console.log('clicked');
    unreads.forEach(makeRead);
});

function makeRead(item){
    let text=item.querySelector('.activity-text').querySelector('.activities');
    let bullet=text.querySelector('.bullet');
    bullet.remove();
    item.classList.remove('unread');
    unreads=document.querySelectorAll(".unread");
    notifNum.innerText=Number(notifNum.innerText)-1;
    allRead();
}

function allRead(){
    if (Number(notifNum.innerText)===0){
        notifNum.style.opacity="0";
    }
}