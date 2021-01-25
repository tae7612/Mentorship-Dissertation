var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var obj = JSON.parse(xhr.responseText);
    loadSeminars(obj.seminars);
  }
};
xhr.open("GET", "seminar.json", true);
xhr.send();



function loadSeminars(seminarItems){
   
    var output ="";
    
    seminarItems.forEach( function (item){	
		output +=  '<div class="col-md-6 px-3  seminar"><div class="card border-0 p-0 "><img src="assets/img/seminars/'+item.img+'" class="card-img-top" alt="..."><div class="card-body px-0"><p class="card-title seminar-topic mb-0 h4"><a href="'+item.link+'" target="_blank">'+item.topic+'</a></p><p class="professor mt-0">'+item.professor+'</p><p class="card-text">'+item.summary+'<span><a href="'+item.link+'"> Click here to Learn More.</a></span> </p><div class="details"><ul class="fa-ul"><li class="my-3 align-text-top"><i class="fa-li icon calendar-icon "></i><span class="mx-2 font-weight-bold">'+item.date+'</span></li><li class="my-3"><i class="fa-li icon clock-icon"></i><span class="mx-2 font-weight-bold">'+item.time+'</span></li><li class="my-3"><i class="fa-li icon location-icon"></i><span class="mx-2 font-weight-bold">'+item.venue+'</span></li></ul></div></div></div><hr></div>';
 					
 	});
 	// Outputs the data to the main section
 	document.getElementById("seminar-container").innerHTML = output;
}


