let tag=document.getElementsByTagName('pop-tag')[0];
tag.innerHTML='<p class="content">欢迎进入</p><span class="button">确定</span>';
var t=tag.children[0];
var a=tag.children[1];
a.addEventListener("click",function(){
    tag.classList.add("tagoff");
    this.classList.add('close');
    t.classList.add('close');
    setTimeout(function(){document.querySelector('.mask').style.display='none';},500);
});
function poptag(text){
            document.querySelector('.mask').style.display='block'
            tag.style.display="block";
            tag.classList.remove("tagoff")
            a.classList.remove('close');
            t.classList.remove('close');
        }
        