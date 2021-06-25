
function randTanuki(){
    const tanukiImage = document.getElementById('1');
    tanukiImage.src = '/Images/tanuki2.jpg';
}   

$("#1").on("click", function(){
  randTanuki();
});