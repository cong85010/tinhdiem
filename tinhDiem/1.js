var tinchi = 0;
var tinchiTH = 0;
var tk = [];
var gk = 0;
var th = [];
var ck = 0;
var tongket = 0;
var td4 = 0;
$(document).ready(function(){
    $('input').change(function () {
        var idcha = $(this).parent().parent().attr('id');
        //tinchi
        tinchi = parseFloat($(`input[id=tc_${idcha}]`).val())
            //thuong ky
        tk = [];
        for(var i = 0; i < 5; i++) {
            var t = $(`input[id=diemtk${i}_${idcha}]`).val();
            if(t != '')
                tk.push(parseFloat(t))
        }

        //giua ky
        gk = parseFloat($(`input[id=diemgk_${idcha}]`).val())
        //diem thuc hanh
        th = []
        for(var i = 0; i < 3; i++) {
            var t = $(`input[id=diemth${i}_${idcha}]`).val();
            if(t != '')
                th.push(parseFloat(t))
        }
        ck = parseFloat($(`input[id=diemck_${idcha}]`).val())
        if(ck >= 0){ 
           diemtongket(idcha)
            diemthang4(idcha);    
        }
    })
    function tongket1() {
        return (((tbTK()*20) + gk*30 + ck*50)/100);
    }
    function diemtongket(id) {
        if(th.length == 0) {
            tongket = tongket1();
        }
        else{
            tinchiTH = Math.floor((tinchi/2));
            tongket = ((tongket1()*(tinchi-tinchiTH) + (tbTH()*tinchiTH))/tinchi);
        }
        tongket = tongket.toFixed(2);
        $(`#diemtongk_${id}`).val(tongket);
    }
    function diemthang4(id) {
        if(tongket >= 9)  td4 = 4;
        else if(tongket >= 8.5) td4 = 3.8;
        else if(tongket >= 8.0) td4 = 3.5;
        else if(tongket >= 7.0) td4 = 3.0;
        else if(tongket >= 6.5) td4 = 2.5;
        else if(tongket >= 5.5) td4 = 2;
        else if(tongket >= 5) td4 = 1.5;
        else if(tongket >= 4) td4 = 1
        else td4 = 0;
        $(`#diem4_${id}`).val(td4)
    }
});

// function tinchi1() {
//     tinchi = parseInt(document.getElementById('tc'));
// }
// function diemtk(){
//     tk[0] = parseFloat(document.getElementById('diemtk0').value);
//     tk[1] = parseFloat(document.getElementById('diemtk1').value);
//     tk[2] = parseFloat(document.getElementById('diemtk2').value);
//     tk[3] = parseFloat(document.getElementById('diemtk3').value);
//     tk[4] = parseFloat(document.getElementById('diemtk4').value);
// }

function tbTK() {
    var tong = 0;
    tk.forEach(function (item){
        tong += item;
    })
    return tong/tk.length;
}
// function diemgk() {
//     gk = document.getElementById('diemgk').value;
// }
// function diemth(){
//     th[0] = parseFloat(document.getElementById('diemth1').value);
//     th[1] = parseFloat(document.getElementById('diemth2').value);
//     th[2] = parseFloat(document.getElementById('diemth3').value);
// }

function tbTH() {
    var  tong = 0;
    th.forEach(function (item){
        tong += item;
    })
    return tong/th.length;
}
// function diemck() {
//     ck = parseFloat(document.getElementById('diemck').value);
// }




