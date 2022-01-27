function inflate(id){
    var hyper_link = document.getElementById(id);
    hyper_link.style.fontSize= '1.2em';
    hyper_link.style.color = 'lightskyblue';
    
}
function deinflate(id){
    var hyper_link = document.getElementById(id);
    hyper_link.style.color = 'white';
    hyper_link.style.fontSize= '1.1em';
}
function inflateImage(){
    var hyper_link = document.getElementById('href_image');
    hyper_link.style.transform = 'scale(1.2)';   
}
function deinflateImage(){
    var hyper_link = document.getElementById('href_image');
    hyper_link.style.transform = 'scale(1.0)';
}
function randomize(){
    var x = (Math.random() *300) + 100;
    var y = (Math.random() *300) + 100 ;
    var xy = Math.round(x) + '/' + Math.round(y);
    console.count(xy);
    document.getElementById('kitty-img').src = "https://placekitten.com/" + xy;
}
var day_to_image ={}
day_to_image[1] = '200/200';
day_to_image[2] = '200/202';
day_to_image[3] = '300/200';
day_to_image[4] = '200/320';
day_to_image[5] = '400/300';
day_to_image[6] = '350/300';
day_to_image[7] = '320/300';
var curr_date = new Date();
var curr_day = parseInt(curr_date.getDay());
console.log(curr_day);
window.onload = function() 
{document.getElementById('kitty-img').src = "https://placekitten.com/" + day_to_image[curr_day];
    console.log("https://placekitten.com/" + day_to_image[curr_day])
};  

