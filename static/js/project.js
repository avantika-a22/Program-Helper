
function Copy(containerid) {
            var range = document.createRange();
            range.selectNode(containerid); //changed here
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
        }
        var flag = 0;
        const staaudio = new Audio("/Sounds/salamisound-1020049-car-start-the-engine-and-the.mp3");
        function anim() {
            document.body.style.backgroundImage = "url(images/pexels-pixabay-531756.jpg)";
            document.getElementById("t1").style.animationPlayState = "paused";
            document.getElementById("t2").style.animationPlayState = "paused";
        }
        function horn() {
            const audio = new Audio("/Sounds/JeepChrkeHornHonkS PE894406.mp3");
            audio.play();
        }

        function start() {

            if (flag == 0) {

                staaudio.play();
                flag = 1;
                document.getElementById("t1").style.animationPlayState = "running";
                document.getElementById("t2").style.animationPlayState = "running";
            }
            else {
                document.getElementById("t1").style.animationPlayState = "paused";
                document.getElementById("t2").style.animationPlayState = "paused";
                staaudio.pause();
                flag = 0;
            }
        }


        // 2 project digital clock 

        const hr = document.querySelector('.hr');
    const min = document.querySelector('.min');
    const sec = document.querySelector('.sec');
    setInterval(() =>{
        let today = new Date();
        let hours = today.getHours()*30;
        let mins = today.getMinutes()*6;
        let secs = today.getSeconds()*6;

        hr.style.transform = `rotateZ(${hours+(mins/12)}deg)`;
        min.style.transform = `rotateZ(${mins}deg)`;
        sec.style.transform = `rotateZ(${secs}deg)`;
    })