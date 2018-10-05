function f() {
    let options = ["", "2", "3"];
    let index = Math.floor((Math.random() * 3));

    let video = document.getElementById("video");
    video.src = "https://s3-us-west-2.amazonaws.com/parcial-cloud-icesi-brabor/video/foreign_user_video" + options[index] + ".mp4?rel=0&amp;autoplay=1";
}