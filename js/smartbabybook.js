$(document).ready(function(){

$('#pregnancy-add-pic').click(function(){
    alert('This will be a picture chooser')
    $('#pregnancy-piclist').append('<li><img src="img/baby.jpg" style="width:100%"/></li>')
    return false;
})

})
