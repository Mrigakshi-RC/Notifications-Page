let unreads=document.querySelectorAll(".unread");
let markRead=document.querySelector("#read");

for (let item of unreads){
    item.addEventListener('click', function myFunc(event) {
        removeBullet(item)
        item.classList.remove('unread');
        item.removeEventListener("click", myFunc);
    })
}

function removeBullet(item){
    let text=item.querySelector('.activity-text').querySelector('.activities');
    let bullet=text.querySelector('.bullet');
    bullet.remove();
}