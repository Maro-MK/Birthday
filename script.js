function check_data(){
    document.getElementsByTagName("form")[0].style.display = "none";
    document.getElementsByTagName("section")[0].style.display = "block";

    const name = document.getElementById("name").value;
    const user_name = document.getElementById("user");
    const audio = document.getElementsByTagName("audio")[0];
    
    user_name.textContent = name;
    document.title = name + " - Happy Birthday !";
    audio.play();
}
