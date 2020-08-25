var inps = document.querySelectorAll('.inp');
var span_phones = document.querySelector('.reg_form_li_one').querySelector('span');
var span_msg = document.querySelector('.reg_form_li_two').querySelector('span');
var span_psd = document.querySelector('.reg_form_li_three').querySelector('span');
var span_check = document.querySelector('.reg_form_li_four').querySelector('span');
var checkbox = document.querySelector('.checkbox');
var ruo = document.querySelector('.ruo');
var zhong = document.querySelector('.zhong');
var qiang = document.querySelector('.qiang');
var submit_btn = document.querySelector('.submit_btn');
//验证手机号 1开头，11位即可
const rg_phone = /^1(\d{10})$/;
//验证 验证码 6位即可
const rg_msg = /\d{6}/;
//验证密码
const rg_psd = /^\d{6,16}$/;
inps[0].addEventListener('blur', function() {
    if (rg_phone.test(inps[0].value)) {
        span_phones.className = 'success';
        span_phones.innerHTML = '<i class="success_icon"></i>手机号格式输入正确';
    } else {
        span_phones.className = 'error';
        span_phones.innerHTML = '<i class="error_icon"></i>手机格式输入错误';
    }

});
inps[1].addEventListener('blur', function() {
    if (rg_msg.test(inps[1].value)) {
        span_msg.className = 'success';
        span_msg.innerHTML = '<i class="success_icon"></i>验证码输入正确';
    } else {
        span_msg.className = 'error';
        span_msg.innerHTML = '<i class="error_icon"></i>验证码输入错误';
    }
});
inps[2].addEventListener('blur', function() {
    console.log(inps[2].value);
    if (rg_psd.test(inps[2].value)) {
        span_psd.className = 'success';
        if (inps[2].value.length < 10) {
            span_psd.innerHTML = '密码安全系数低'
            ruo.style.display = 'inline-block';
            zhong.style.display = 'none'
            qiang.style.display = 'none'
        } else if (inps[2].value.length < 13) {
            span_psd.innerHTML = '密码安全系数中'
            zhong.style.display = 'inline-block'
            ruo.style.display = 'none'
            qiang.style.display = 'none'
        } else {
            span_psd.innerHTML = '密码安全系数高'
            qiang.style.display = 'inline-block'
            ruo.style.display = 'none'
            zhong.style.display = 'none'
        }
    } else if (inps[2].value.length < 6) {
        span_psd.className = 'error';
        span_psd.innerHTML = '密码长度过低';
        ruo.style.display = 'none'
        zhong.style.display = 'none'
        qiang.style.display = 'none'
    } else {
        span_psd.className = 'error';
        span_psd.innerHTML = '密码超出长度';
        ruo.style.display = 'none'
        zhong.style.display = 'none'
        qiang.style.display = 'none'
    }
});
inps[3].addEventListener('blur', function() {
    if (inps[2].value === inps[3].value) {
        span_check.innerHTML = ''
    } else {
        span_check.className = 'error'
        span_check.innerHTML = '密码输入不一致'
    }
})