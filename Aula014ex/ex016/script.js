function contar() {
    let ini = document.getElementById('ti')
    let fim = document.getElementById('tf')
    let passo = document.getElementById('tp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contar'
        //window.alert('Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido, considerando passo 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
                //contagem crescente
            }

        } else {
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += ` ${c} \u{1F449} `
                //contagem decrescente
            }
        }
            res.innerHTML += `\u{1F3C1}`
    }

}