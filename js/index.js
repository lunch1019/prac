let temp = 0;
let flag = false;

function printClock() {
    
    let clock = document.getElementById("clock");            // 출력할 장소 선택
    let currentDate = new Date();                                     // 현재시간
    let calendar = currentDate.getFullYear() + "-" + (currentDate.getMonth()+1) + "-" + currentDate.getDate() // 현재 날짜
    let amPm = 'AM'; // 초기값 AM
    let currentHours = addZeros(currentDate.getHours(),2); 
    let currentMinute = addZeros(currentDate.getMinutes() ,2);
    let currentSeconds =  addZeros(currentDate.getSeconds(),2);
    let want_time_hour = parseInt($('#want_time_hour').val());
    let want_time_min = parseInt($('#want_time_min').val());
    let checkedValue = $("input[type=radio][name=gozen_gogou]:checked").val();

    if(currentHours >= 12){ // 시간이 12보다 클 때 PM으로 세팅, 12를 빼줌
        amPm = 'PM';
        currentHours = addZeros(currentHours - 12,2);
    }


    if(currentHours >= (want_time_hour-1)){ // 본문에서 입력받은 원하는 시간 이후에 색이 빨간색으로 변함.

        if(currentMinute >= (want_time_min))
        {
            currentHours = '<span style="color:#de1951;">'+currentHours+'</span>'
            currentMinute= '<span style="color:#de1951;">'+currentMinute+'</span>'
            currentSeconds= '<span style="color:#de1951;">'+currentSeconds+'</span>'
        } 
    }
    if(currentHours<=(want_time_hour-1))
    {
        alert("최소 한 시간 이상 차이가 나게 설정해주십시오.");
    }


    if(currentHours == (want_time_hour))
    { //설정한 퇴근 시간이 되면 alert 알림 표시
        if(currentMinute==(want_time_min))
        {
        alert("지정하신 퇴근 타이밍이 되었습니다.");
        }
    }
    clock.innerHTML = currentHours+":"+currentMinute+":"+currentSeconds +" <span style='font-size:50px;'>"+ amPm+"</span>"; //날짜를 출력해 줌
    
    setTimeout("printClock()",1000);         // 1초마다 printClock() 함수 호출
}

function addZeros(num, digit) { // 자릿수 맞춰주기
        let zero = '';
        num = num.toString();
        if (num.length < digit) {
        for (i = 0; i < digit - num.length; i++) {
            zero += '0';
        }
        }
        return zero + num;
}

function stop() {
    flag = false;
}

function start() {
    flag = true;
    blink();
    move();
}

function blink() {
    if(flag) {
        let color = $('body').css('color');
        if(color == 'rgb(255, 0, 0)' && temp == 0) {
            $('body').css('color','orange');
        } else if (color == 'rgb(255, 165, 0)') {
            $('body').css('color','yellow');
        } else if (color == 'rgb(255, 255, 0)') {
            $('body').css('color','green');
        } else if (color == 'rgb(0, 128, 0)') {
            $('body').css('color','blue');
        } else if (color == 'rgb(0, 0, 255)') {
            $('body').css('color','navy');
        } else if (color == 'rgb(0, 0, 128)') {
            $('body').css('color','purple');
        } else {
            $('body').css('color','red');
        }
        setTimeout('blink()', 50);
    } else {
        $('body').css('color','black');
    }
}

function move() {
    if(flag) {
        let align = $('body').css('text-align');
        if(align == 'left') {
            $('body').css('text-align','center');
            temp = 1;
        } else if(align == 'center' && temp == 1) {
            $('body').css('text-align','right');
            temp = 0;
        } else if(align == 'right') {
            $('body').css('text-align','center');
        } else {
            $('body').css('text-align','left');
        }
            setTimeout('move()', 50);
    } else {
        $('body').css('text-align','center');
    }
}


$(document).ready(function() {
    $('body').onload = printClock();
    $('#party_time').click(function() {
        start();
    });
    $('#party_time_done').click(function() {
        stop();
    });
    $('#test_bt').click(function() {
        console.log('NOTHING');
    });
    // Handler for .ready() called.
});
