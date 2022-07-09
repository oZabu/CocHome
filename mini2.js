function timer() {
    var nowTime = new Date(); //  現在日時を得る
    var nowH = "00" + nowTime.getHours(); // 時を抜き出す
    var nowM = "00" + nowTime.getMinutes(); // 分を抜き出す
    var nowS = "00" + nowTime.getSeconds(); //秒を抜き出す

    var nowHour = nowH.slice(-2);
    var nowMin = nowM.slice(-2);
    var nowSec = nowS.slice(-2);

    var msg = nowHour + ":" + nowMin;　//表示する時間(時間+分)
    document.getElementById("time-display").innerHTML = msg; //時間を表示させる

    var nowMo = "00" + nowTime.getMonth();
    var nowD = "00" + nowTime.getDate();
    var nowW = nowTime.getDay();

    var nowMon = nowMo.slice(-2);
    var nowDay = nowD.slice(-2);
    var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][nowW];

    var msgd = nowMon + "/" + nowDay + "(" + dayOfWeek + ")";
    document.getElementById("day-display").innerHTML = msgd; //時間を表示させる
};

function appcheck() {
    const twitterapp = document.getElementById('twitterapp');
    if (twitterapp.checked) {
        var off = document.getElementById('twitterbody');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('twitterbody');
        on.style.display = 'none';
    };

    const translationapp = document.getElementById('translationapp');
    if (translationapp.checked) {
        var off = document.getElementById('translationbody');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('translationbody');
        on.style.display = 'none';
    };

    const weatherapp = document.getElementById('weatherapp');
    if (weatherapp.checked) {
        var off = document.getElementById('weatherbody');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('weatherbody');
        on.style.display = 'none';
    };

    const alarmapp = document.getElementById('alarmapp');
    if (alarmapp.checked) {
        var off = document.getElementById('alarmbody');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('alarmbody');
        on.style.display = 'none';
    };
};

function twittercheck() {
    //NHK
    const NHKcheck = document.getElementById('NHKcheck');
    if (NHKcheck.checked) {
        var off = document.getElementById('NHKtwitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('NHKtwitter');
        on.style.display = 'none';
    };

    //NERV
    const NERVcheck = document.getElementById('NERVcheck');
    if (NERVcheck.checked) {
        var off = document.getElementById('NERVtwitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('NERVtwitter');
        on.style.display = 'none';
    };

    //FAMITSU
    const FAMITSUcheck = document.getElementById('FAMITSUcheck');
    if (FAMITSUcheck.checked) {
        var off = document.getElementById('FAMITSUtwitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('FAMITSUtwitter');
        on.style.display = 'none';
    };

    //GAMEwith
    const GAMEwithcheck = document.getElementById('GAMEwithcheck');
    if (GAMEwithcheck.checked) {
        var off = document.getElementById('GAMEwithtwitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('GAMEwithtwitter');
        on.style.display = 'none';
    };

    //APEX
    const APEXcheck = document.getElementById('APEXcheck');
    if (APEXcheck.checked) {
        var off = document.getElementById('APEXtwitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('APEXtwitter');
        on.style.display = 'none';
    };

    //APEX1
    const APEX1check = document.getElementById('APEX1check');
    if (APEX1check.checked) {
        var off = document.getElementById('APEX1twitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('APEX1twitter');
        on.style.display = 'none';
    };
};

setInterval(appcheck, 100);
setInterval(twittercheck, 100);
setInterval(timer, 1000);