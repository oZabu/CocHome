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


    var days = new Date();
    //月
    var nowMon = ("0" + (days.getMonth() + 1)).slice(-2);
    //日
    var nowDay = ("0" + days.getDate()).slice(-2);
    //曜
    var nowW = days.getDay();
    var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][nowW];

    var msgd = nowMon + "/" + nowDay + "(" + dayOfWeek + ")";
    document.getElementById("day-display").innerHTML = msgd;
    document.getElementById("headTime").innerHTML = msg; //時間を表示させる
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
    const NHKcheck = document.getElementById('twittercheck1');
    if (NHKcheck.checked) {
        var off = document.getElementById('NHKtwitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('NHKtwitter');
        on.style.display = 'none';
    };

    //NERV
    const NERVcheck = document.getElementById('twittercheck2');
    if (NERVcheck.checked) {
        var off = document.getElementById('NERVtwitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('NERVtwitter');
        on.style.display = 'none';
    };

    //FAMITSU
    const FAMITSUcheck = document.getElementById('twittercheck3');
    if (FAMITSUcheck.checked) {
        var off = document.getElementById('FAMITSUtwitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('FAMITSUtwitter');
        on.style.display = 'none';
    };

    //GAMEwith
    const GAMEwithcheck = document.getElementById('twittercheck4');
    if (GAMEwithcheck.checked) {
        var off = document.getElementById('GAMEwithtwitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('GAMEwithtwitter');
        on.style.display = 'none';
    };

    //APEX
    const APEXcheck = document.getElementById('twittercheck5');
    if (APEXcheck.checked) {
        var off = document.getElementById('APEXtwitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('APEXtwitter');
        on.style.display = 'none';
    };

    //APEX1
    const APEX1check = document.getElementById('twittercheck6');
    if (APEX1check.checked) {
        var off = document.getElementById('APEX1twitter');
        off.style.display = 'inline';
    } else {
        var on = document.getElementById('APEX1twitter');
        on.style.display = 'none';
    };

    //editbutton めんどかったからここに書く
    const editb = document.getElementById('editcheck');
    if (editb.checked) {
        var editboff = document.getElementById('editbody');
        editboff.style.display = 'inline';
    } else {
        var editbon = document.getElementById('editbody');
        editbon.style.display = 'none';
    };
};
const headbo = document.getElementById('headbo');
window.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        if (window.scrollY < 250) {
            headbo.style.display = 'none';
        } else {
            headbo.style.display = 'inline';
        };
    });

});

//URL変更計画
const buttontext1 = document.getElementById("buttontext1");
const URL1t = document.getElementById("URL1twitter");
const iframe_ = document.getElementById("timeline");
console.log(URL1t);
function doneButtonClick1() {



    const Name1 = document.getElementById("name1").value;
    buttontext1.innerHTML = Name1;

    const URL1 = document.getElementById("url1").value;

    URL1t.setAttribute('href', URL1);

    // URL1t.setAttribute('href', URL1);//urlを置き換えるやつ
    console.log(URL1);
    console.log(URL1t);

};

// const setIntervalyouTwitterTimeline = document.getElementById('timeline');

setInterval(appcheck, 100);
setInterval(twittercheck, 100);
setInterval(timer, 1000);
