var bool = true;
function randTanuki(){
    const tanukiImage = document.getElementById('1');
    if(bool){tanukiImage.src = '/Images/tanuki2.jpg'; bool = false;}
    else{tanukiImage.src = '/Images/tanuki.jpg'; bool = true;}
}   

$("#1").on("click", function(){
  randTanuki();
});