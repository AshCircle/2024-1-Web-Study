let title = document.getElementById('title');
title.addEventListener('mouseenter', function(){
    title.style.fontSize = "60px";
    title.style.color = "green"
});
title.addEventListener('mouseleave', function(){
    title.style.fontSize = "30px";
    title.style.color = "blue"
});