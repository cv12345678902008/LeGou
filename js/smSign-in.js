let ewm=document.querySelector('.ewm'); //二维码图片
let tel=document.querySelector('.tel'); //二维码提示
let QR_code=document.querySelector('.QR-code')
//二维码鼠标移入事件
QR_code.addEventListener('mouseenter',function() {
    startMove(ewm, {left:50}, 300, 'linear', function() {
        tel.style.display='block'
        startMove(tel,{right:15}, 300, 'linear')
    })
})
QR_code.addEventListener('mouseleave',function() {
    startMove(ewm, {left:108}, 200, 'linear',);
    tel.style.display='none'
})

//扫码和登录的切换
let sig=document.querySelector('.sig');
let account=document.querySelector('.account');
let spans=document.querySelectorAll('#main .topp p span');
let flag=false;
for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener('mouseenter',function() {
        if (this==spans[0]) {
            spans[1].classList.remove('cur');
            spans[0].classList.remove('cur');
            this.classList.add('cur')
            account.style.display='none'
            sig.style.display='block'
        }else if(this==spans[1]){
            spans[1].classList.remove('cur');
            spans[0].classList.remove('cur');
            this.classList.add('cur')
            account.style.display='block'
            sig.style.display='none'
        }
    })
}

$().ready(function () {
    // 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate({
      //验证信息
      rules: {
        username: {
          required: true,
          myUsre:true,
        },
        pwd: {
          required: true,
          myPwd:true,
        },
        
      },
      //提示信息
      messages: {
        username: {
          required: "请填写用户名",
        },
        pwd: {
          required: "请填写密码",
        },
      },
    });
    jQuery.validator.addMethod(
        "myUsre",
        function (value, element) {
          var tel = /^[A-za-z0-9]{4,10}$/;
          return this.optional(element) || tel.test(value);
        },
        "请核对用户名"
      );
    
      jQuery.validator.addMethod(
        "myPwd",
        function (value, element) {
          var tel = /^[A-za-z0-9]{6,16}$/;
          return this.optional(element) || tel.test(value);
        },
        "请核对密码"
      );
      
      
    
  });