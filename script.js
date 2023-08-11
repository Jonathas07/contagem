function contagem(){
    //contar de X a Y pulando de P em P 
    var txtinicio = document.getElementById('txtinicio')
    var txtfinal = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')
    var i = Number(txtinicio.value)
    var f = Number(txtfinal.value)
    var p = Number(txtpasso.value)
    var res = document.getElementById('res')
    
    if((i<0) || (f<0) || (p<=0||p=='')){
        alert('[ERRO] Preencha tudo corretamente!')
    }else{
        res.innerHTML = ''
        if(i<f){
            for(let c=i; c<=f; c+=p){
                res.innerHTML += `\u{1F449} ${c}, `} 
        }else{
            for(let c=i; c>=f; c-=p){
                res.innerHTML += `\u{1F449} ${c}, `}
            }
        res.innerHTML += `\u{1F449} \u{1F3C5}`
    }
}