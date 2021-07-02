function menu(a){
    if(a==1){
        mostrar('display_nav','si_nav');
    }
    else if(a==2){
        ocultar('nav','head_p');
    }
}

function mostrar(a ,b){
    let clase_nav;
    let clase_head;
    let defaul='nav'
    let defaul_head='head_p'
    clase_nav=document.getElementById('nav');
    clase_head=document.getElementById('head');

    clase_nav.className=a+' '+defaul;
    clase_head.className=b+' '+defaul_head;
    i=2;
}
function ocultar(a ,b){
    let clase_nav;
    let clase_head;
    clase_nav=document.getElementById('nav');
    clase_head=document.getElementById('head');

    clase_nav.className=a;
    clase_head.className=b;
    i=1;
}