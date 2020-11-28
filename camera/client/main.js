let vid= document.getElementById("vid")
function capture() {
    navigator.mediaDevices.getUserMedia({video: {
        width: 250,
        height: 250
    }})
        .then(function (stream) {
            vid.srcObject = stream
            vid.onloadedmetadata= function(e){
                vid.play()
            }
        })
        .catch(function (err) {
           alert(err)
        });
}

function pause(){

    vid.pause()
}

function snap() {
    let canvas = document.getElementById("canvas")
    canvas.width = vid.videoWidth
    canvas.height = vid.videoHeight 
    canvas.style.display="none"
    let img= document.getElementById("img")
    let ctx = canvas.getContext("2d")
    ctx.drawImage(vid, 0, 0);
    // Other browsers will fall back to image/png
    img.src = canvas.toDataURL('image/webp')
}