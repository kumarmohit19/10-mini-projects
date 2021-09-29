const container= document.getElementById('container')
const btn= document.getElementById('btn')

btn.addEventListener('click', () => {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.textContent="this is a crazy challenge"
    container.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    },2000)
});
