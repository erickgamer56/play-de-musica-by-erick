var loadFile = function(event) {
    var output = document.getElementById('img');
    output = URL.createObjectURL(event.target.files[0]);
    var audio = new Audio (output)
    document.getElementById("pause").style.display="block"
    document.getElementById("play").style.display="none"
    audio.play()
    var cont = 0
    var contt = setInterval(() => {
        cont++
        if (cont > 60){
            cont = 0
        }
    }, 1000);
    setInterval(() => {
        document.getElementById("time").innerHTML= Math.floor(audio.currentTime)
        if (Math.floor(audio.currentTime)>=0){
            document.getElementById("time").innerHTML= Math.floor(audio.currentTime/60) +":"+cont
        }
    }, 1);

    document.getElementById("play").addEventListener("click",function(){
        document.getElementById("pause").style.display="block"
        document.getElementById("play").style.display="none"
        audio.play()
        setInterval(contt)
    })
    document.getElementById("pause").addEventListener("click",function(){
        document.getElementById("pause").style.display="none"
        document.getElementById("play").style.display="block"
        audio.pause()
        clearInterval(contt)
    })
    document.getElementById("remove").addEventListener("click",function(){
        audio.muted= true
        document.getElementById("pause").style.display="none"
        document.getElementById("play").style.display="block"
    })
  };