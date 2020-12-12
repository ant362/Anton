//alert("куку1");
$(function(){
// меню
$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  });//end slide toggle

  $(window).resize(function() {
		if (  $(window).width() > 500 ) {
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready конец меню


$("#tru").hide();
$("#err").hide();


// выбор режима
var rezim;
var time_;
rezim=1;
time_=7.0;
flag2enter=true;
raz=4;
starts=true;


//обработка нажатия на время меньше
$("#sek_minus").click(function() {
  if (time_<=1){time_=time_-0.1} else {time_=time_-1};
     time_s=time_.toFixed(1);
    //time_s=String(time_);
  $("#seku_show").empty();
  $("#seku_show").append(time_s);

});

//обработка нажатия на время больше
$("#sek_plus").click(function() {
 if (time_<1){time_=time_+0.1} else {time_=time_+1};
    time_s=time_.toFixed(1);
    //time_s=String(time_);
  //alert(time_s);
  $("#seku_show").empty();
  $("#seku_show").append(time_s);

});
//обработка нажатия на разряд меньше
$("#raz_minus").click(function() {
  if (raz<=1){} else {raz=raz-1};
     razs=raz.toFixed(0);
    //razs=String(raz);
  $("#raz_show").empty();
  $("#raz_show").append(razs);

});

//обработка нажатия на разряд больше
$("#raz_plus").click(function() {
 if (raz<4 ) {raz=raz+1};
    razs=raz.toFixed(0);
    //razs=String(raz);
  //alert(razs);
  $("#raz_show").empty();
  $("#raz_show").append(razs);

});
  //vibor_rezima (rezim);
//console.log("star2 "+time_);

$("#p_pdf").click(function() {
//var doc = new jsPDF()
//var HTMLelement = $(".content").html()
//doc.fromHTML(HTMLelement)
//doc.save('test.pdf')
/*  html2canvas(document.querySelector(".content")).then(canvas =>{
    document.querySelector("#nov").appendChild(canvas);
    Canvas2Image.saveAsImage(canvas, null, null,"png","abak_pic")
    });*/
});

//старт

$("#start").click(function() {

  $("#blokid_s").fadeIn();
  //$("#cifotv").val();

  vibor_rezima (rezim);
  skritie_aba (time_);

}) // конец старта
// обработка enter

$("#cifotv").keyup(function() {
if(event.keyCode==13){

$("#blokid_s").delay(1000).fadeIn();
//$("#cifotv").delay(1000).empty();
//vibor_rezima (rezim);
//skritie_aba (time_);
}
}) //конец обработки enter

//vibor_rezima (rezim);

if (starts) {
  vibor_rezima (rezim);starts=false;

   }
smena_rezima (rezim,time_);





function skritie_aba (time_) {

  tt=time_*1000;
  $("#blokid_s").delay(tt).fadeOut(100);  // скрываем абакус

}

function vibor_rezima (rezim) {
  $("#tru").hide();
  $("#err").hide();
  //alert(rezim);
//text.onfocus = function() {text.value = '';};
if (rezim==1) {
$('#cifotv').focus();
$("#cifs").hide();
$("#cifotvs").show();
min=1;
if (raz==1) {max=9;};
if (raz==2) {max=99;};
if (raz==3) {max=999;};
if (raz==4) {max=9999;};

ciff=Math.floor(Math.random() * (max - min + 1)) + min;
//console.log("ciff111="+ciff);
showabak(ciff);
//console.log("до enter  "+flag2enter);
 $('#cifotv').val('');
 //$('#cifotv').focusin();
$("#cifotv").keyup(function() {
//text.onfocus = function() {text.value = '';};
if(event.keyCode==13 & $(this).val()!='' & flag2enter){ //сравнение
 prcif=$(this).val();
//  $('#cifotv').delay(2000).val('');
//console.log("ciff="+ciff+" prcif="+prcif);
if (ciff==prcif) {     //вывод результата
  $("#tru").show();
	$("#err").hide();
  $("#zv_ok").trigger("play");
  // document.getElementById('zv_ok').play();
}
else {
	$("#tru").hide();
	$("#err").show();
  $("#zv_er").trigger("play");
//  document.getElementById('zv_er').play();

}
flag2enter=false;
//console.log("if  "+flag2enter);
//break;
} //конец if event

//else if (event.keyCode==13 & $(this).val()=='')
//{vibor_rezima (rezim);
//console.log("else 2 "+flag2enter);}

else if (event.keyCode==13 & $(this).val()!='' & !flag2enter)
  { $('#cifotv').val('');flag2enter=true;return;}
//console.log("else 1 "+flag2enter)//;

//text.onfocus = function() {text.value = '';};

}); //конец keyup
}


if (rezim==0) {

 ch_rez=0;
	$("#cifotvs").hide();
	$("#cifs").show();
$("#cif").keyup(function() {

 ciff=$(this).val();
 leng=ciff.length;  //длинна строки
console.log("rezim=0  ciff="+String(ciff)+"  "+leng);
last=ciff.substring(leng-1,leng); //вывод посоднего
ch_p=ciff.indexOf("+");
ch_m=ciff.indexOf("-");
ch_u=ciff.indexOf("*");
ch_d=ciff.indexOf("/");
if (ch_p>0) {ch_rez=(+ciff.substring(0,ch_p))+(+ciff.substring(ch_p+1,leng+1));}
if (ch_m>0) {ch_rez=(+ciff.substring(0,ch_m))-(+ciff.substring(ch_m+1,leng+1));}
if (ch_u>0) {ch_rez=(+ciff.substring(0,ch_u))*(+ciff.substring(ch_u+1,leng+1));}
if (ch_d>0) {ch_rez=(+ciff.substring(0,ch_d))/(+ciff.substring(ch_d+1,leng+1));}



if (last!="+" & last!="-" & last!="*" & last!="/") {
showabak(ciff);

}
if (ch_rez>0) {
console.log( " равно "+ ch_rez);

showabak(ch_rez);
}

});

};
};  // end vibor_rezima






 //  end obr_enter()





function smena_rezima (time_,rezim) {
$("#rez_m").click(function() {

	if (rezim==1) {rezim=0;
	$("#rez_m").empty();
	$("#rez_m").append("Режим 0");
	}
	else {rezim=1;
	$("#rez_m").empty();
	$("#rez_m").append("Режим 1");
	}
	//alert(rezim);
  $("#blokid_s").fadeIn();
	vibor_rezima(rezim);
});}; //конец выбора режима



function showabak (ciff) {
	ciff=String(ciff);
//alert(ciff);
leng=ciff.length;  //длинна строки
//alert(leng);
edin=ciff.substring(leng-1,leng); //вывод посоднего

desi=ciff.substring(leng-2,leng-1);

sotn=ciff.substring(leng-3,leng-2);

tisi=ciff.substring(leng-4,leng-3);





$("#des" ).hide();
$("#sot" ).hide();
$("#tis" ).hide();

if (raz>1){$("#des" ).show()}
if (raz>2){$("#sot" ).show()}
if (raz>3){$("#tis" ).show()}



 if (edin==1) {
 $("#edi" ).prop("src","/media/abb1.png");
   };
 if (edin==2) {
 $("#edi" ).prop("src","/media/abb2.png");
  };
 if (edin==3) {
 $("#edi" ).prop("src","/media/abb3.png");
  };
 if (edin==4) {
 $("#edi" ).prop("src","/media/abb4.png");
  };
 if (edin==5) {
 $("#edi" ).prop("src","/media/abb5.png");
  };
 if (edin==6) {
 $("#edi" ).prop("src","/media/abb6.png");
  };
 if (edin==7) {
 $("#edi" ).prop("src","/media/abb7.png");
  };
 if (edin==8) {
 $("#edi" ).prop("src","/media/abb8.png");
  };
 if (edin==9) {
 $("#edi" ).prop("src","/media/abb9.png");
  };
 if (edin==0) {
 $("#edi" ).prop("src","/media/abb0.png");
  };



 if (desi==1) {
 $("#des" ).prop("src","/media/abb1.png");
   };
 if (desi==2) {
 $("#des" ).prop("src","/media/abb2.png");
  };
 if (desi==3) {
 $("#des" ).prop("src","/media/abb3.png");
  };
 if (desi==4) {
 $("#des" ).prop("src","/media/abb4.png");
  };
 if (desi==5) {
 $("#des" ).prop("src","/media/abb5.png");
  };
 if (desi==6) {
 $("#des" ).prop("src","/media/abb6.png");
  };
 if (desi==7) {
 $("#des" ).prop("src","/media/abb7.png");
  };
 if (desi==8) {
 $("#des" ).prop("src","/media/abb8.png");
  };
 if (desi==9) {
 $("#des" ).prop("src","/media/abb9.png");
  };
 if (desi==0) {
 $("#des" ).prop("src","/media/abb0.png");
  };



 if (sotn==1) {
 $("#sot" ).prop("src","/media/abb1.png");
   };
 if (sotn==2) {
 $("#sot" ).prop("src","/media/abb2.png");
  };
 if (sotn==3) {
 $("#sot" ).prop("src","/media/abb3.png");
  };
 if (sotn==4) {
 $("#sot" ).prop("src","/media/abb4.png");
  };
 if (sotn==5) {
 $("#sot" ).prop("src","/media/abb5.png");
  };
 if (sotn==6) {
 $("#sot" ).prop("src","/media/abb6.png");
  };
 if (sotn==7) {
 $("#sot" ).prop("src","/media/abb7.png");
  };
 if (sotn==8) {
 $("#sot" ).prop("src","/media/abb8.png");
  };
 if (sotn==9) {
 $("#sot" ).prop("src","/media/abb9.png");
  };
 if (sotn==0) {
 $("#sot" ).prop("src","/media/abb0.png");
  };


 if (tisi==1) {
 $("#tis" ).prop("src","/media/abb1.png");
   };
 if (tisi==2) {
 $("#tis" ).prop("src","/media/abb2.png");
  };
 if (tisi==3) {
 $("#tis" ).prop("src","/media/abb3.png");
  };
 if (tisi==4) {
 $("#tis" ).prop("src","/media/abb4.png");
  };
 if (tisi==5) {
 $("#tis" ).prop("src","/media/abb5.png");
  };
 if (tisi==6) {
 $("#tis" ).prop("src","/media/abb6.png");
  };
 if (tisi==7) {
 $("#tis" ).prop("src","/media/abb7.png");
  };
 if (tisi==8) {
 $("#tis" ).prop("src","/media/abb8.png");
  };
 if (tisi==9) {
 $("#tis" ).prop("src","/media/abb9.png");
  };
 if (tisi==0) {
 $("#tis" ).prop("src","/media/abb0.png");
  };


};


}) // конец главной
