/* manual switch*/
/*
    Copyright 2020 Holger https://holger.one Under GPLv3.0 @ https://github.com/holgerhuo/minimalist-search
*/
function themeDark(){$('head').append('<link rel="stylesheet" href="static/css/sou_night.css" />');}
function themeLight(){$('head').append('<link rel="stylesheet" href="static/css/sou.css" />');}
function initThemeSwitch(){
    theme = Cookies.get('theme');
	if(theme == '1'){
		$("#theme-switch-icon").attr("src", "static/icon/icon-dark.svg");
    }
    if(theme == '0'){
		$("#theme-switch-icon").attr("src", "static/icon/icon-light.svg");
	}
}
function initTheme(){ 
    theme = Cookies.get('theme');
    if(theme =='1'){
        themeDark();
    }
    if(theme == '0'){
        themeLight();
    }
initThemeSwitch();
} 
initTheme();

$(document).ready(function(){
  theme = Cookies.get('theme');
  $("#theme-switch").click(function() {
    if(theme =='1' || theme == '3'){
        Cookies.set('theme',0, { expires: 1 });
        themeLight();
        $("#theme-switch-icon").attr("src", "static/icon/icon-light.svg");
    }if(theme == "0" || theme == '2'){
      Cookies.set('theme', '1', { expires: 1 });
      themeDark();
      $("#theme-switch-icon").attr("src", "static/icon/icon-dark.svg");
    }
    initThemeSwitch();
  });
});

// 使用Canvas分析图片亮度
function checkBrightness(imgSrc) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(0, 0, img.width, img.height).data;
    let brightness = 0;
    for(let i=0; i<data.length; i+=4) {
      brightness += (data[i] + data[i+1] + data[i+2]) / 3;
    }
    console.log('平均亮度:', brightness/(data.length/4));
  };
  img.src = imgSrc;
}
