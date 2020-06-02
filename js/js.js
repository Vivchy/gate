let banner = document.querySelector('.banner_img')

window.addEventListener('resize',function(){
    var imgSmall = 'img/head.jpg';
    var imgBig = 'img/headFull.jpg'
    if(this.window.innerWidth < 810){
        banner.setAttribute('src', imgSmall)
    }
    else{
        banner.setAttribute('src', imgBig)
    }
});
