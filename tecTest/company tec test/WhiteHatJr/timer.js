window.onload = function() {
    let TIME_LIMIT = 60;
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;
    const FULL_DASH_ARRAY = '236';
    let btnStart = document.getElementById("btn-start");
    let baseTimerLabel = document.getElementById('base-timer-label');
    let baseTimerPathRemaining = document.getElementById("base-timer-path-remaining");

    function formatTimeLeft(time) {
        let seconds = time;
        // if value of seconds < 10 then add '0' before it
        if (seconds < 10 ) {
            seconds = `0${seconds}`;
        }
        return `${seconds}`;
    }

    baseTimerLabel.innerHTML = formatTimeLeft(timeLeft);

    let timerInterval = null;

        function startTimer() {
            TIME_LIMIT = 60;
            timePassed = 0;
            timeLeft = TIME_LIMIT;
            setTimeout(function(){
                btnStart.removeAttribute("disabled");
            }, 60000)
            timerInterval = setInterval(() => {
                // The amount of time passed increments by one
                timePassed++;
                timeLeft = TIME_LIMIT - timePassed;

                if (timeLeft >= 0 && timeLeft <= 60) {
                    baseTimerLabel.innerHTML = formatTimeLeft(timeLeft);
                    setCircleDasharray();
                }

                if (timeLeft == 0) {
                    clearInterval(timerInterval);
                }

            }, 1000);

        }

    btnStart.onclick = function() {
        btnStart.setAttribute("disabled", "disabled");
        startTimer();
    }

    var reset = document.getElementById('btn-reset');
    reset.onclick = function() {
        TIME_LIMIT = 60;
        timePassed = 0;
        timeLeft = TIME_LIMIT;
        btnStart.removeAttribute("disabled");
        baseTimerLabel.innerHTML = formatTimeLeft(timeLeft);
        setCircleDasharray();
        clearInterval(timerInterval);
    }

    // Add the current path color to path element style
    baseTimerPathRemaining.style.stroke = 'rgb(228, 225, 83)';

    function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }

    // Change the value of dasharray as time passes, starting from 225
    function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 236`;
            baseTimerPathRemaining.setAttribute("stroke-dasharray", circleDasharray);
    }

};
