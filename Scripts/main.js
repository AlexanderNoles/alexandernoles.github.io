var bool = true; // var bool is staying
let tanuki_index = 0;
var stored_count = localStorage.getItem("meme")
var count = 0;
if (stored_count !== null) {
	count = parseInt(stored_count)
}
	 document.getElementById("2").innerHTML = count
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
	count += 1;
	localStorage.setItem("meme", count);
	document.getElementById("2").innerHTML = count
}   

$("#1").on("click", function(){
  randTanuki();
});
