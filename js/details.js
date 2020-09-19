// lis摸上去的效果
let lis=document.querySelectorAll('#popularity ul li') //获取li
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


// 放大镜
$(function() {
	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 342,//承载容器宽
		height : 342,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 2//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);

	/*magnifier的内置函数调用*/
	/*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
	*/
});

// 购买数量
let text=document.querySelector('.jionshop input') //获取文本框
let div=document.querySelector('.jionshop div div') //获取div按钮
let p=document.querySelector('.jionshop div p') //获取P按钮
let num=text.value; //获取文本框的value值
div.addEventListener('click',function() {
            num++;
            text.value=num
})
p.addEventListener('click',function() {
        num--;
        if (num>1) {
            text.value=num
        }else{
            text.value=1
            num=1
        }
})

// 按钮样式
let buttons=document.querySelectorAll('#minute .main .Quantity button')
let spans=document.querySelectorAll('#minute .main .Quantity button span')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',function() {
        if (this===buttons[0]) {
            spans[1].classList.remove('cur2');
            spans[0].classList.add('cur2')
            buttons[1].classList.add('but');
            buttons[1].classList.remove('but2')
            this.classList.add('but2')
        }else if(this===buttons[1]){
            spans[0].classList.remove('cur2');
            spans[1].classList.add('cur2')
            buttons[0].classList.add('but');
            buttons[0].classList.remove('but2')
            this.classList.add('but2')
        }
    })
    
}

// 商品和评价的交互事件
let as=document.querySelectorAll('#evaluate .modity .book-title a')
let curs=document.querySelectorAll('#evaluate .cur')
let lastEle=0;
for (let i = 0; i < as.length; i++) {
    as[i].addEventListener('mouseenter',function() {
        if (lastEle!==i) {
            as[lastEle].classList.remove('avtion')
            as[i].classList.add('avtion')
            curs[lastEle].classList.remove('cuu')
            curs[i].classList.add('cuu')
            lastEle=i
        }
    })
}
