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
        repwd: {
          required: true,
          myPwd:true,
          equalTo: "#pwd",
        },
        number:{
            required:true,
            myTel:true,
        },
        vcode:{
            required:true,
            myVcode:true,
        },
        namecode:{
            required:true,
            myNameCode:true,
        },
        cxk:{
            required:true,
        }
      },
      //提示信息
      messages: {
        username: {
          required: "请填写用户名",
        },
        pwd: {
          required: "请填写密码",
        },
        repwd: {
          required: "请确认密码",
          equalTo: "两次密码输入不一致",
        },
        number:{
            required: '请填写11位手机号码',
        },
        vcode:{
            required:'请输入验证码',
        },
        namecode:{
            required:'请输入手机验证码',
        },
        
      },
    });
    jQuery.validator.addMethod(
        "myUsre",
        function (value, element) {
          var tel = /^[A-za-z0-9]{4,10}$/;
          return this.optional(element) || tel.test(value);
        },
        "用户名至少4位最多10位(不包括特殊符号)"
      );
    
      jQuery.validator.addMethod(
        "myPwd",
        function (value, element) {
          var tel = /^[A-za-z0-9]{6,16}$/;
          return this.optional(element) || tel.test(value);
        },
        "密码至少6最多16(不包括特殊符号)"
      );
      jQuery.validator.addMethod(
        "myTel",
        function (value, element) {
          var tel = /^[0-9]{11}$/;
          return this.optional(element) || tel.test(value);
        },
        "请填写11位手机号码"
      );
      jQuery.validator.addMethod(
        "myVcode",
        function (value, element) {
          var tel = /^[A-za-z0-9]{4}$/;
          return this.optional(element) || tel.test(value);
        },
        "请填写正确的验证码"
      );
      jQuery.validator.addMethod(
        "myNameCode",
        function (value, element) {
          var tel = /^[0-9]{6}$/;
          return this.optional(element) || tel.test(value);
        },
        "请填写六位验证码"
      );
      
    
  });
  
  let sm=document.querySelector('.sm');
  let ck=document.querySelector('.ck')
  let cnm=document.querySelector('.cnm')
  if (ck.checked==false) {
    sm.disabled=true;
    sm.style.background='#CCCCCC'
    cnm.innerHTML='请阅读并勾选这个协议'
  }
  ck.addEventListener('click',function() {
    if (ck.checked==true) {
      sm.disabled=false;
      sm.style.background='#f60'
      cnm.style.display='none'
    }else if(ck.checked==false){
      sm.disabled=true;
      sm.style.background='#CCCCCC'
      cnm.style.display='block'
      cnm.innerHTML='请阅读并勾选这个协议'
    }
  })
