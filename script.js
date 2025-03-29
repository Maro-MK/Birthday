function check_data(){
    document.getElementsByTagName("form")[0].style.display = "none";
    document.getElementsByTagName("section")[0].style.display = "block";

    const name = document.getElementById("name").value;
    const spans = document.getElementsByTagName("span");
    const audio = document.getElementsByTagName("audio")[0];

    for(let i = 0; i < spans.length; i++){
        spans[i].textContent = name;
    }
    document.title = name + " - Happy Birthday !";
    audio.play();
}