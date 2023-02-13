let unreads=document.querySelectorAll(".unread");
let markRead=document.querySelector("#read");

for (let item of unreads){
    item.addEventListener('click', function myFunc() {
        makeRead(item)
        item.removeEventListener("click", myFunc);
    })
}

markRead.addEventListener('click', function () {
    console.log('clicked');
    unreads.forEach(makeRead); //handle for individuals after clicking on some
});

function makeRead(item){
    let text=item.querySelector('.activity-text').querySelector('.activities');
    let bullet=text.querySelector('.bullet');
    bullet.remove();
    item.classList.remove('unread');
}