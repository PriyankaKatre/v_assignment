const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', ()=>{
    const notif = document.createElement('div');
    notif.innerText = "This challenge is Crazy!";
    notif.classList.add('toast')
    container.appendChild(notif);
    setTimeout(()=>{
        notif.remove();
    },
    1000
    );
})
