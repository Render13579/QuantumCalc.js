var val1 = 0;
 var val2 = 0;
 var process = "";
 var result = 0;

 function ONEclick(obj) {
   document.getElementById("display").innerHTML="1";
 	if (val1 == 0) {
 		val1 = 1;
 	}
 	else {
 		val2 = 1;
 	}
 }
 function TWOclick(obj) {
 	document.getElementById("display").innerHTML="2";
 	if (val1 == 0) {
 		val1 = 2;
 	}
 	else {
 		val2 = 2;
 	}
 }
 function THREEclick(obj) {
 	document.getElementById("display").innerHTML="3";
 	if (val1 == 0) {
 		val1 = 3;
 	}
 	else {
 		val2 = 3;
 	}
 }
 function FOURclick(obj) {
 	document.getElementById("display").innerHTML="4";
 	if (val1 == 0) {
 		val1 = 4;
 	}
 	else {
 		val2 = 4;
 	}
 }
 function FIVEclick(obj) {
 	document.getElementById("display").innerHTML="5";
 	if (val1 == 0) {
 		val1 = 5;
 	}
 	else {
 		val2 = 5;
 	}
 }
 function SIXclick(obj) {
 	document.getElementById("display").innerHTML="6";
 	if (val1 == 0) {
 		val1 = 6;
 	}
 	else {
 		val2 = 6;
 	}
 }
 function SEVENclick(obj) {
 	document.getElementById("display").innerHTML="7";
 	if (val1 == 0) {
 		val1 = 7;
 	}
 	else {
 		val2 = 7;
 	}
 }
 function EIGHTclick(obj) {
 	document.getElementById("display").innerHTML="8";
 	if (val1 == 0) {
 		val1 = 8;
 	}
 	else {
 		val2 = 8;
 	}
 }
 function NINEclick(obj) {
 	document.getElementById("display").innerHTML="9";
 	if (val1 == 0) {
 		val1 = 9;
 	}
 	else {
 		val2 = 9;
 	}
 }

 function plus(obj) {
 	document.getElementById("display").innerHTML="+";
 	process = "+";
 }
 function minus(obj) {
 	document.getElementById("display").innerHTML="-";
 	process = "-";
 }
 function divide(obj) {
 	document.getElementById("display").innerHTML="/";
 	process = "/";
 }
 function multiply(obj) {
 	document.getElementById("display").innerHTML="*";
 	process = "*";
 }

 function equals(obj) {
 	if (process == "+") {
 		result = val1 + val2;
 		document.getElementById("display").innerHTML=result;
 		val1 = result;
 	}
 	else if (process == "-") {
 		result = val1 - val2;
 		document.getElementById("display").innerHTML=result;
 		val1 = result;
 	}
 	else if (process == "/") {
 		result = val1 / val2;
 		document.getElementById("display").innerHTML=result;
 		val1 = result;
 	}
 	else if (process == "*") {
 		result = val1 * val2;
 		document.getElementById("display").innerHTML=result;
 		val1 = result;
 	}
 }

 function clear(obj) {
 	document.getElementById("display").innerHTML="0";
 	val1 = 0;
 	val2 = 0;
 	process = "";
 	result = 0;
 }



 function option(obj) {
 	window.resizeTo(540,525);
 }

 function optionDBL(obj) {
 	window.resizeTo(540,435);
 }
