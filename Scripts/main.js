var bool = true; // var bool is staying
let tanuki_index = 0;
function randTanuki(){
    const tanukiImage = document.getElementById('1');
    tanuki_index += 1;
    tanuki_index = tanuki_index % 3;
    switch (tanuki_index) {
        case 0:
	    tanukiImage.src = '/Images/tanuki.jpg'; 
            break;
        case 1:
	    tanukiImage.src = '/Images/tanuki2.jpg'; 
            break;
        case 2:
	    tanukiImage.src = '/Images/tanuki3.jpg'; 
            break;
    }
}   

$("#1").on("click", function(){
  randTanuki();
});
