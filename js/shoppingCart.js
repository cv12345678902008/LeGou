// 全选全不选
let check=document.querySelectorAll('.checkBox'); //获取所有多选框
console.log(check)
for (let i = 0; i < check.length; i++) {
    check[0].addEventListener('click',function() {
       if (check[0].checked==true) {
           check[i].checked=true
       }else if(check[0].checked==false){
        check[i].checked=false
       }
    })

    check[check.length-1].addEventListener('click',function() {
        if (this.checked==true) {
            check[i].checked=true
        }else if(this.checked==false){
         check[i].checked=false
        }
     })
}

// 获取商品数量加减
let adding=document.querySelectorAll('#commodity .adding')
let reduction=document.querySelectorAll('#commodity .reduction')
let txt=document.querySelectorAll('#commodity .txt')
let price=document.querySelectorAll('#commodity .price')
let sum=document.querySelectorAll('#commodity .sum')
let Total_price=document.querySelector('.Total_price')
for (let i = 0; i < txt.length; i++) {
    adding[i].addEventListener('click',function() {
       let num= txt[i].value
       num++
       txt[i].value=num;

       let pr = price[i].innerHTML;
       let sums=pr*num
       sum[i].innerHTML=sums

       let a = parseInt(sum[0].innerHTML)+parseInt(sum[1].innerHTML)
       Total_price.innerHTML=a
    })
    reduction[i].addEventListener('click',function() {
        let num= txt[i].value
        num--;
        txt[i].value=num;
        if (num<1) {
            txt[i].value=1
            num=1
        }
        let pr = price[i].innerHTML;
       let sums=pr*num
       sum[i].innerHTML=sums
     })
}
