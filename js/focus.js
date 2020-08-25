//轮播图
let a_prev = document.querySelector('.a_prev');
let a_next = document.querySelector('.a_next');
let focus = document.querySelector('.focus');
let focus_img = focus.querySelectorAll('img');
focus.addEventListener('mouseover', (e) => {
    a_prev.style.display = 'block';
    a_next.style.display = 'block';
})
focus.addEventListener('mouseleave', (e) => {
    a_prev.style.display = 'none';
    a_next.style.display = 'none';
})
let num = 0;
a_next.addEventListener('click', function() {
    if (num < 3) {
        num++;
        focus_img[num].className = 'active';
    }
})
a_prev.addEventListener('click', function() {
        if (num > 0) {
            num--;
            focus_img[num + 1].className = '';
        }
    })
    //下拉菜单
let dropdown = document.querySelector('.dropdown')
let dd = document.querySelector('.dropdown').querySelector('.dd');
dropdown.addEventListener('mouseover', function() {
    dd.style.display = 'block';
})