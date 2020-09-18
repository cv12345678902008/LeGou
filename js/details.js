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

