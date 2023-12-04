function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        document.body.style.background = '#50b0f5'
        img.src = 'Imagens/Manha.png'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        document.body.style.background = '#eb842e'
        img.src = 'Imagens/Tarde.png'
    } else {
        document.body.style.background = '#143567'
        img.src = 'Imagens/Noite.png'
    }
}