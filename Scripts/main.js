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
    bool = bool? false : bool == false ? null : true; 
    tanukiImage.src = bool? 'Images/tanuki.jpg' : bool == false ? 'Images/tanuki2.jpg' : 'Images/tanuki3.jpg'; 
	count += 1;
	localStorage.setItem("meme", count);
	document.getElementById("2").innerHTML = count
}
$("#1").on("click", function(){
  randTanuki();
});
