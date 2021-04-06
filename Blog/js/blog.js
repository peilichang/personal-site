function showcontact(){
	var show = document.getElementById("showmore"); 
    if(document.getElementById("contact-info").style.display=="none") {
    	show.value = "－聯絡我"
        document.getElementById("contact-info").style.display = "block";
    }else if(document.getElementById("contact-info").style.display=="block"){
        show.value = "＋聯絡我"
        document.getElementById("contact-info").style.display="none";
    }
}
function popup(){
    if(document.getElementById("line").style.display=="none") {
        document.getElementById("line").style.display = "block";
    }else if(document.getElementById("line").style.display=="block"){
        document.getElementById("line").style.display="none";
    }
}
var count=0;
function contact(){
    if(count==0){
        document.getElementById('show').style.color='white';
        count++;
    }
    else{
        document.getElementById('show').style.color='rgba(255,255,255,.5)';
        count=0;
    }
}