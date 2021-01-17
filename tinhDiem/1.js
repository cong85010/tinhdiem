var tinchi = 0;
var tinchiTH = 0;
var tk = [];
var gk = 0;
var th = [];
var ck = 0;
var tongket = 0;
var td4 = 0;
function tinchi1() {
    tinchi = parseInt(document.getElementById('tc'));
}
function diemtk(){
    tk[0] = parseFloat(document.getElementById('diemtk0').value);
    tk[1] = parseFloat(document.getElementById('diemtk1').value);
    tk[2] = parseFloat(document.getElementById('diemtk2').value);
    tk[3] = parseFloat(document.getElementById('diemtk3').value);
    tk[4] = parseFloat(document.getElementById('diemtk4').value);
}

function tbTK() {
    var sl = 0, tong = 0;
    tk.forEach(function (item){
        if(!Number.isNaN(item)){
            sl++;
            tong += item;
        }
    })
    return tong/sl;
}
function diemgk() {
    gk = document.getElementById('diemgk').value;
}
function diemth(){
    th[0] = parseFloat(document.getElementById('diemth1').value);
    th[1] = parseFloat(document.getElementById('diemth2').value);
    th[2] = parseFloat(document.getElementById('diemth3').value);
}

function tbTH() {
    var sl = 0, tong = 0;
    th.forEach(function (item){
        if(!Number.isNaN(item)){
            sl++;
            tong += item;
        }
    })
    return tong/sl;
}
function diemck() {
    ck = parseFloat(document.getElementById('diemck').value);
}
function tongket1() {
    return (((tbTK()*20) + gk*30 + ck*50)/100);
}
function diemtongket() {
    if(!Number.isNaN(th[0])) {
        tongket = tongket1();
    }
    else{
        tinchiTH = Math.floor((tinchi/2));
        tongket = ((tongket1()*(tinchi-tinchiTH) + (tbTH()*tinchiTH))/tinchi);
    }
    tongket = tongket.toFixed(2);
    document.getElementById('diemtongk').value = tongket;
}

function diemthang4() {
    if(tongket >= 9)  td4 = 4;
    else if(tongket >= 8.5) td4 = 3.8;
    else if(tongket >= 8.0) td4 = 3.5;
    else if(tongket >= 7.0) td4 = 3.0;
    else if(tongket >= 6.5) td4 = 2.5;
    else if(tongket >= 5.5) td4 = 2;
    else if(tongket >= 5) td4 = 1.5;
    else if(tongket >= 4) td4 = 1
    else td4 = 0;
    document.getElementById('diem4').value =tongket;
}
