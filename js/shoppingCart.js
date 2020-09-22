$(function(){
    totalPrice()
    function totalPrice() {
        let sum = 0;
        let money = 0;
        $('#commodity table .checkBox').each(function () {
            if ($(this).prop('checked')) {
                sum += parseInt($(this).parent().siblings('.checkbox').find('.txt').val() )
                money += parseFloat($(this).parent().siblings('.sum').html()) 
            }
        })
        $('.Total').html(sum);
        $('.totalprice').html(money.toFixed(2))
    }
    // 上面一个全选
 $('.topCB').click(function () {
     if ($(this).prop('checked')==true){
         $('#commodity .checkBox').prop('checked','checked');
     }else{
        $('#commodity .checkBox').prop('checked','');
     }
     totalPrice()
 })

    // 下面的全选
$('.settlement .checkBox').click(function () {
    console.log(1)
    if ($(this).prop('checked')==true){
        $('#commodity .checkBox').prop('checked','checked');
        $('.topCB').prop('checked','checked')
    }else{
        $('#commodity .checkBox').prop('checked','');
        $('.topCB').prop('checked','')

    }
    totalPrice()
})

    //商品列表的input标签选择
    $('#commodity table .checkBox').click(function () {
        let flag = true;
        $('#commodity table .checkBox').each(function(index,dom) {
            let bool=$(dom).prop('checked')
            if (!bool) {
                flag=false;
            }
        })
        $('.topCB').prop('checked',flag)
        $('.settlement .checkBox').prop('checked',flag)
        totalPrice()

    })

    // 给减号添加点击事件
    $('.reduction').click(function () {
        let num=$(this).siblings('.txt').val();
        if (num>1) {
            --num;
        }
        $(this).siblings('.txt').val(num)

        singleTotalPrice(this,num)
        totalPrice()

    })

    // 给加号添加点击事件
    $('.adding').click(function () {
        let num=$(this).siblings('.txt').val()
        ++num;
        $(this).siblings('.txt').val(num)

        singleTotalPrice(this,num)
        totalPrice()
        
    })

    // input框失去焦点
    $('#commodity table .txt').blur(function () {
        //过滤非数字的输入
        //获取到当前的输入
        let num =$(this).val();
        if (isNaN(num)) {
            $(this).val(1);
            num=1
        }
        if (num>200) {
            $(this).val(200);
            num=200
        }

        singleTotalPrice(this,num)
        totalPrice()
    })


//点击删除选中的商品
$(".remove").click(function () {
    $(this).parents(".single").remove()
    totalPrice()
})

/* 点击选中删除 删除选中的内容的内容 */
$(".count").click(function () {
    $("#commodity table .checkBox").each(function () {
        if ($(this).prop("checked")) {
            $(this).parents(".single").remove();
        }
    })
    totalPrice()
})

// 计算小计
function singleTotalPrice(obj,num) {
    let unit=$(obj).parent().siblings('.price').html()
    let money=num*unit;
    $(obj).parent().siblings('.sum').html(money.toFixed(2))
}
})