function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.innerHTML = '<img src="img/fotomanha.png">'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.innerHTML = '<img src="img/fototarde.png">'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.innerHTML = '<img src="img/fotonoite.png">'
        document.body.style.background = '#515154'
    }
}