const headTab=document.querySelector('#head_menu span');
const sidebar=document.querySelector('#body #sidebar');
const box=document.querySelectorAll('.box');
const sideli=document.querySelectorAll('#body #sidebar ul li');
const sideul=document.querySelectorAll('#body #sidebar ul');
const box1=document.getElementsByClassName('box1')[0];
const box1R=document.getElementsByClassName('box1')[0].children[1];
let sideFlag=true;
let boxN=0;
headTab.onclick=function(){
    if(sideFlag==true){
    sidebar.classList.add('sideClose');
    box[boxN].style.marginLeft='0';
    headTab.innerText='>';
    sideFlag=false;
}else{
    sidebar.classList.remove('sideClose');
    box[boxN].style.marginLeft='160px';
    headTab.innerText='<';
    sideFlag=true;
}
}
for(let i=0;i<sideli.length;i++){
    sideli[i].onclick=function(){
        if(this.className!='checked'){
            boxN=this.getAttribute('data-sb');
            for(let j=0;j<sideli.length;j++){
                sideli[j].classList.remove('checked');
                box[j].style.display='none';
            }
            box[boxN].style.display='block';
            this.classList.add('checked');
        }
    }
}
let box1width=parseInt(box1.clientWidth);
if(box1width-880<700){
box1R.style.width='880px';
}
let resizeTimer=null;
window.onresize=function(){
    if(resizeTimer){
        clearTimeout(resizeTimer);
    }
    box1width=parseInt(box1.clientWidth);
    if(box1width-880<700){
    box1R.style.width='880px';
}else{
    box1R.style.width='calc(100% - 880px)';
}
};