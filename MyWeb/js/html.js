const headTab=document.querySelector('#head_menu span');
const sidebar=document.querySelector('#body #sidebar');
const box=document.querySelectorAll('.box');
const sideli=document.querySelectorAll('#body #sidebar ul li');
const sideul=document.querySelectorAll('#body #sidebar ul');
const box1=document.getElementsByClassName('box1')[0];
const box1L=document.getElementsByClassName('box1')[0].children[0];
const box1R=document.getElementsByClassName('box1')[0].children[1];
const ttx=document.querySelector(".box4 .console");
const tbx=document.querySelector(".box4 .testbox");
const imgbox=document.querySelector(".box1 .left .imgWindow");
var boxN=0;
var sideFlag=true;
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
setTimeout(function(){box1RSize();},200);
}
for(var i=0;i<sideli.length;i++){
    sideli[i].onclick=function(){
        if(this.className!='checked'){
            boxN=this.getAttribute('data-sb');
            for(var j=0;j<sideli.length;j++){
                sideli[j].classList.remove('checked');
                box[j].style.display='none';
            }
            box[boxN].style.display='block';
            this.classList.add('checked');
        }
    }
}
var box1width=parseInt(box1.clientWidth);
if(box1width-box1L.width<700){
box1R.style.width='880px';
}
var box1RSize=function(){
    box1width=parseInt(box1.clientWidth);
    console.log(box1width-box1L.offsetWidth);
    if(box1width-box1L.offsetWidth<=650){
    box1R.style.width='800px';
}else{
    box1R.style.width='calc(100% - 800px)';
}
}
ttx.value="position: absolute;\ntop:200px;\nleft:400px;\nz-index:90;\nheight: 50px;\nwidth: 50px;\nbackground-color: black;\nbox-shadow:0 0 5px 2px white;";
tbx.style=ttx.value;
function reset(){
tbx.style=ttx.value;
}

//轮播图
var imgname=["hui1.jpg","hui2.jpg","hui3.jpg","hui4.png","hui5.png","hui6.png","hui7.jpg","hui8.jpg"];
var imgindex=imgname.length;
var imgul=document.querySelector(".box1 .left .imgWindow ul");
var imgbut=document.querySelector(".box1 .left .imgWindow .but");
while(imgindex){
    var imgli=document.createElement("li");
    if(imgindex==8)imgli.classList.add("checked");
    imgul.appendChild(imgli);
    imgindex--;
}
//更换轮播图
function imgplay(idx){
    imgbox.style.backgroundImage="url(img/"+imgname[idx]+")";
    document.querySelector(".box1 .left .imgWindow ul .checked").classList.remove("checked");
    imgul.children[idx].classList.add("checked");
}
//设定计时器
var imgt=setInterval(function(){
imgplay(imgindex);
imgindex++;
imgindex%=imgname.length;
},3000);

imgbut.addEventListener("click",function(e){
    if(e.target.className=="left"){
        imgindex=imgindex-1<0?7:imgindex-1;
        imgplay(imgindex);
    }
    else if(e.target.className=="right"){
        imgindex=imgindex+1>7?0:imgindex+1;
        imgplay(imgindex);
    }
})

imgbox.addEventListener("mouseenter",function(){
    clearInterval(imgt);
})
imgbox.addEventListener("mouseleave",function(){
    imgt=setInterval(function(){
        imgplay(imgindex);
        imgindex++;
        imgindex%=imgname.length;
        },3000);
})