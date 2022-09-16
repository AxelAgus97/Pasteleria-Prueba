


let btnOk= true;

const btnMenu= document.querySelector('.btn-menu').addEventListener('click',function Menu(){
    
    let MenuResponsive = document.querySelector('.ul-nav');
    if (btnOk == true) {
        MenuResponsive.style.transform= 'translateX(0%)';
        MenuResponsive.style.transitionProperty= 'transform';
        MenuResponsive.style.transitionDuration= '1s';
        MenuResponsive.style.zIndex='50'
        btnOk= false;
        console.log(btnOk)
    } else {
        MenuResponsive.style.transform= 'translateX(100%)';
        MenuResponsive.style.transitionProperty= 'transform';
        MenuResponsive.style.transitionDuration= '1s';
        MenuResponsive.style.zIndex='50'
        btnOk= true;
        console.log(btnOk)
    }
}
)