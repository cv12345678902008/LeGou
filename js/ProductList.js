function lunbo(slider,boxh,w,h) {
    $(slider).slidebox({
      boxh:boxh, //盒子的高度
      w: w, //图片的宽度
      h: h, //图片的高度
      isShow: true, //是否显示控制器
      isShowBtn: true, //是否显示左右按钮
      controltop: 4, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
      controlsW: 20, //控制按钮宽度
      controlsH: 20, //控制按钮高度
      radius: 2, //控制按钮圆角度数
    });
}
lunbo('#slider',578,1200,578)
lunbo('.pptbox1',600,1200,578)
// 新书畅销榜
$(".ebookright ul li").mouseenter(function () {
    $(this).find("div").show();
    $(this).find(".text").hide();
    $(this).siblings().find("div").hide();
    $(this).siblings().find(".text").show();
  });

//折扣区
let lis=document.querySelectorAll('#Discount ul li') //获取li
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseenter',function() {
        this.style.backgroundColor='#f2f2f2'
        this.querySelector('.orpr').style.display='block'
    })
    lis[i].addEventListener('mouseleave',function() {
        this.style.backgroundColor='#fff'
        this.querySelector('.orpr').style.display='none'
    })
}

// 独家推荐选项卡
let as=document.querySelectorAll('#sole .book-title a');
let pptBoxs=document.querySelectorAll('#sole .pptbox1')
let cuu=2;
for (let i = 0; i < as.length; i++) {
    as[i].addEventListener('mouseenter',function() {
        if (cuu!==i) {
            as[cuu].classList.remove('avtion');
            as[i].classList.add('avtion');
            pptBoxs[cuu].classList.remove('cur');
            pptBoxs[i].classList.add('cur');
            cuu=i
        }
    })
    
}

// 猜你喜欢
let youLike=document.querySelector('#youlike .book-title img');
let ebooklefts=document.querySelectorAll('#youlike .ebookleft');
let flag=1;
    flag=2;
    flag=3;
youLike.addEventListener('click',function() {
        if (flag==3) {
            ebooklefts[1].classList.add('cur')
            ebooklefts[0].classList.remove('cur')
            ebooklefts[2].classList.remove('cur')
            flag=2
        }else if(flag==2){
            ebooklefts[2].classList.add('cur')
            ebooklefts[0].classList.remove('cur')
            ebooklefts[1].classList.remove('cur')
            flag=1
        }else if(flag==1){
            ebooklefts[0].classList.add('cur')
            ebooklefts[1].classList.remove('cur')
            ebooklefts[2].classList.remove('cur')
            flag=3
        }
    })