const videoClickHandler = (video) => {
    document.getElementById("slider").src = video;
};

const videos = [
    './vidoes/video1.mp4',
    './vidoes/video2.mp4',
    './vidoes/video3.mp4',
    './vidoes/video4.mp4'
];


const videoHandler = (link,i) => {
    console.log(vidoes[i]);
}

const links = document.querySelectorAll('.navigation li img');

links.forEach((link, i) => {
    link.addEventListener("click", () => {
        videoHandler(link,i);
    });
});