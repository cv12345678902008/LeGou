// banner轮播
function lunbo(slider,boxh,w,h) {
        $(slider).slidebox({
          boxh:boxh, //盒子的高度
          w: w, //图片的宽度
          h: h, //图片的高度
          isShow: true, //是否显示控制器
          isShowBtn: true, //是否显示左右按钮
          controltop: 10, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
          controlsW: 12, //控制按钮宽度
          controlsH: 12, //控制按钮高度
          radius: 6, //控制按钮圆角度数
        });
}
lunbo('#slider',420,1000,420)
//图书轮播
lunbo('.slider2',220,329,220)
// 服装轮播
lunbo('.slider3',342,429,342)

//图书的选项卡
let ebookLefts = document.querySelectorAll("#ebook .ebookleft"); //获取所有的ebookleft类
let as = document.querySelectorAll("#ebook .book-title a"); //所有book-tltle下的a标签
let lastElement = ebookLefts.length - 1;
for (let i = 0; i < as.length; i++) {
  as[i].addEventListener("mouseenter", function () {
    if (lastElement !== i) {
      as[i].classList.add("avtion");
      as[lastElement].classList.remove("avtion");
      ebookLefts[i].classList.add("crr");
      ebookLefts[lastElement].classList.remove("crr");
      lastElement = i;
    }
  });
}

// 服装的选项卡
let as2 = document.querySelectorAll("#cloth .book-title a");
let clothtops = document.querySelectorAll("#cloth .clothtop");
let lastElement2 = clothtops.length - 1;
for (let i = 0; i < as2.length; i++) {
  as2[i].addEventListener("mouseenter", function () {
    if (lastElement2 !== i) {
      as2[i].classList.add("avtion2");
      as2[lastElement2].classList.remove("avtion2");
      clothtops[i].classList.add("crr2");
      clothtops[lastElement2].classList.remove("crr2");
      lastElement2 = i;
    }
  });
}

//户外运动选项卡
let as3 = document.querySelectorAll("#sport .book-title a");
let clothtops2 = document.querySelectorAll("#sport .clothtop");
let lastElement3 = clothtops2.length - 1;
for (let i = 0; i < as3.length; i++) {
  as3[i].addEventListener("mouseenter", function () {
    if (lastElement3 !== i) {
      as3[i].classList.add("avtion3");
      as3[lastElement3].classList.remove("avtion3");
      clothtops2[i].classList.add("crr3");
      clothtops2[lastElement3].classList.remove("crr3");
      lastElement3 = i;
    }
  });
}
//童装
let as4 = document.querySelectorAll("#child-cloth .book-title a");
let clothtops3 = document.querySelectorAll("#child-cloth .clothtop");
let lastElement4 = clothtops3.length - 1;
for (let i = 0; i < as4.length; i++) {
  as4[i].addEventListener("mouseenter", function () {
    if (lastElement4 !== i) {
      as4[i].classList.add("avtion4");
      as4[lastElement4].classList.remove("avtion4");
      clothtops3[i].classList.add("crr4");
      clothtops3[lastElement4].classList.remove("crr4");
      lastElement4 = i;
    }
  });
}

//新书畅销榜
$("#ebook .ebookright ul li").mouseenter(function () {
  $(this).find("div").show();
  $(this).find(".text").hide();
  $(this).siblings().find("div").hide();
  $(this).siblings().find(".text").show();
});

//电梯楼层
let ps = document.querySelectorAll("#elevator p"); //引入elevator的p标签
for (let i = 0; i < ps.length; i++) {
  ps[i].addEventListener("mouseenter", function name() {
    if (this===ps[0]) {
      this.style.backgroundColor = "#93d46f";
    }else if(this===ps[1]){
      this.style.backgroundColor = "#F55727";
    }else if(this===ps[2]){
      this.style.backgroundColor = "#BA9DED";
    }else if(this===ps[3]){
      this.style.backgroundColor = "#FF7495";
    }else if(this===ps[4]){
      this.style.backgroundColor = "#C3EC52";
    }
    this.querySelector("span").style.display = "block";
  });
  ps[i].addEventListener("mouseleave", function name() {
    this.style.backgroundColor = "#f2f2f2";
    this.querySelector("span").style.display = "none";
  });
}
$(ps[0]).click(function (e) {
  let obj = $("#ebook").offset();
  let t = obj.top;
  $("html,body").stop().animate({ scrollTop: t }, 1000);
});
$(ps[1]).click(function (e) {
  let obj = $("#cloth").offset();
  let t = obj.top;
  $("html,body").stop().animate({ scrollTop: t }, 1000);
});
$(ps[2]).click(function (e) {
  let obj = $("#sport").offset();
  let t = obj.top;
  $("html,body").stop().animate({ scrollTop: t }, 1000);
});
$(ps[3]).click(function (e) {
  let obj = $("#child-cloth").offset();
  let t = obj.top;
  $("html,body").stop().animate({ scrollTop: t }, 1000);
});
$(ps[4]).click(function (e) {
  let obj = $("#house").offset();
  let t = obj.top;
  $("html,body").stop().animate({ scrollTop: t }, 1000);
});

//返回顶部
let backTop = document.querySelector("#elevator .backtop"); //获取返回顶部图片
//添加点击事件
window.addEventListener('scroll',function () {
    let sclTop=document.documentElement.scrollTop||document.body.scrollTop;
console.log(sclTop)
if (sclTop>800) {
    backTop.style.display='block'
}else{
    backTop.style.display='none'
}
})
$(backTop).click(function(e) {
    let obj=$('#header').offset();
    let t=obj.top;
    $('html,body').stop().animate({scrollTop:t},1500)
})


// 在线客户
let customer = document.getElementById("customer"); //获取customer盒子
let QR_code = document.querySelector("#customer .QR-code"); //获得二维码节点

customerTop();
let innerTop = parseInt(
  (document.documentElement.clientHeight - customer.offsetHeight) / 2
);

//当网页大小发生改变时盒子的位置变化
window.addEventListener("resize", function () {
  customerTop();
});
//当页面发生卷动时盒子的位置
window.addEventListener("scroll", function () {
  let scrTop = document.documentElement.scrollTop;
  startMove(customer, { top: scrTop + innerTop }, 500, "easeBothStrong");
});

//盒子的高度
function customerTop() {
  let innerTop = parseInt(
    (document.documentElement.clientHeight - customer.offsetHeight) / 2
  );
  customer.style.top = innerTop + "px";
}

//鼠标移入事件
customer.addEventListener("mouseenter", function () {
  QR_code.style.display = "block";
});
customer.addEventListener("mouseleave", function () {
  QR_code.style.display = "none";
});

// 顶部搜索框
let topFrame=document.querySelector('#topframe')
window.addEventListener('scroll',function() {
  srlTop=document.documentElement.scrollTop||document.body.scrollTop;
  if (srlTop>1700) {
    topFrame.style.display='block'
  }else{
    topFrame.style.display='none'
  }
})