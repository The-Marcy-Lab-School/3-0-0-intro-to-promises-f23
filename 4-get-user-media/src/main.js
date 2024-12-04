const video = document.querySelector("#video");

const main = () => {
  const config = {
    video: true,
    audio: false
  };

  navigator.mediaDevices.getUserMedia(config)
    .then((stream) => {
      video.srcObject = stream;
    }).catch((err) => {
      console.error(err);
    });
};

main();