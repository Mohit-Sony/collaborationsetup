let api = "https://codingninjas.in/api/v3/courses";
let course = document.getElementById("courses_container");

function fetch (){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){

         let response = JSON.parse( xhr.response );
         console.log(response); 
         console.log(response.data.courses); 
         let array = response.data.courses;
         for(x in array){
             let title = array[x].title;
             console.log(title);
             console.log(x);
             if(!(array[x].preview_image_url == ""|| array[x].preview_image_url == null)){
             course.innerHTML += `<div id="course" style="overflow: hidden;">
             <div style="padding: 0;">
                 <img style="overflow: hidden;" src="${array[x].preview_image_url}" alt="">
             </div>
             <div>
                 <h4>${title}</h4>
             </div>
             
         </div>` ;
         }
        }

         }



 

    xhr.open("GET" , api , true);
    xhr.send();

}
fetch();