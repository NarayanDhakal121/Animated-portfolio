const vid1 = document.getElementById("video1");
const vid2 = document.getElementById("video2");
const vid3 = document.getElementById("video3");

const videos = [vid1, vid2, vid3];

videos.forEach((video) => {
  video.addEventListener("mouseover", function () {
    video.play();
  });
  video.addEventListener("mouseout", function () {
    video.pause();
  });
});


