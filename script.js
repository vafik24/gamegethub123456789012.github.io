let clickCount = 0;

document.getElementById('click_button').addEventListener('click', function(){

    clickCount++;
    
    document.getElementById('click_count').textContent = clickCount

})

