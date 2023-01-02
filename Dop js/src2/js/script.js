let sotni = ["", "сто", "двести", "триста", "четыреста", "пятсот", "шестсот", "семсот", "восемсот", "девятсот"],
    desatki = ["", "надцать", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"],
    edinici = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];

    //nu kak minemum 2 leta eso nado ?????
function go() {

    //nu predpolojim ya eto napisal tobis (let)
	let s = d = e = "";
		let n = document.getElementById("n").value;


		if(n >= 100) s = sotni[n[n.length-3]] + " ";  // <== tak nado napisat 3 cunki 123 eto 3 slova
        //na zametku ===> eto dermom poka ne rabotaet
			else s = "";



			if(n >= 10) d = desatki[n[n.length-2]] + " ";
			else d = "";


			e = edinici[n[n.length-1]];


		if(n >= 11 && n <= 19)
			document.getElementById("tekst").innerHTML = s + e + d;
			else document.getElementById("tekst").innerHTML = s + d + e;

			//alaaaa bu kansolə çıxmır :(((( <== saba dadelat

            console.log(tekst);
		}
        	
