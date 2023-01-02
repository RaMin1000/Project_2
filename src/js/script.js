const inputs = document.getElementsByClassName('i')
      NacalnayaSummaVklada = document.getElementById('nacalnaya_summa_vklada'),
      Popolnenie = document.getElementById('popolnenie'),
      ProcentnayaStavka = document.getElementById('procentnaya_stavka'),
      SrokVklada = document.getElementById('srok_vklada'),
      SummaNaKonec = document.querySelector('#summa_na_konec');

const NacProcenti = document.querySelector('#nac_procenti');
const SummaPopolneniya = document.querySelector('#summa_popolneniya');

let knopka = document.querySelector('button');
let div = document.getElementById('finish');

const btn = document.querySelector('.btn')
const nav = document.getElementById("nav")


knopka.addEventListener('click', function () {
	div.classList.toggle('opened_div');
    calculateMonth()
})

    function calculateMonth(){
    // Выплченные проценты.
    if (ProcentnayaStavka.value > 0){
        Procenti =  ((parseInt(NacalnayaSummaVklada.value) * parseFloat(SrokVklada.value) * parseFloat(ProcentnayaStavka.value)) / 12) / 100;
    }else{
        (ProcentnayaStavka.value < 1 );
        {Procenti = false;
            ProcentnayaStavka.value = ('Введите число больше нуля');}
            
        
        //{Procenti == console.log('Максимальный процент - 100%');}
    }
    const formatter = new Intl.NumberFormat('ru');
    NacProcenti.innerText = formatter.format(Procenti);  //<==надобы запомнить. 
    
    opovesenie()
    opovesenie2()
    opovesenie3()
    opovesenie4()
    calculateSummaPopolneniya()
    calculate()
    
    console.log(Procenti)
}
////// Сумма пополнения.
function calculateSummaPopolneniya(){
    if (Popolnenie.value > 0){
       ItogovoePopolneniya = parseFloat(SrokVklada.value) * parseFloat(Popolnenie.value); 
    }
    else {(Popolnenie.value < 0 ); {
        ItogovoePopolneniya.value = false;   
    }
    }
    const formatter = new Intl.NumberFormat('ru');
    SummaPopolneniya.innerText = formatter.format(ItogovoePopolneniya);
    
    console.log(ItogovoePopolneniya)
}
//////Ежемесячная капиталтзация
function calculate() {
    if (NacalnayaSummaVklada.value > 0) {
        totalPrice =  parseInt(NacalnayaSummaVklada.value) * ((1 + (parseFloat(ProcentnayaStavka.value)/100)/12) ** parseFloat(SrokVklada.value));//+ (SummaPopolneniya.value); //если 12 поменять на 365
                                                                                                                                                //то получется ежеднев. 
        }
        else {
            (NacalnayaSummaVklada.value <= 0);
             {totalPrice = NacProcenti.value};
        }  
    console.log(totalPrice);
    
    const formatter = new Intl.NumberFormat('ru');
    SummaNaKonec.innerText = formatter.format(totalPrice);
}
//nəsə ifov mnogo nado sokratit
function opovesenie() {
    if (NacalnayaSummaVklada.value <= 0)
    {NacalnayaSummaVklada.value = ('Введите число больше нуля');}
}
function opovesenie2() {
    if (SrokVklada.value <= 0)
    {SrokVklada.value = ('Введите число больше нуля');} 
}
function opovesenie3() {
    if (Popolnenie.value <= 0)
    {Popolnenie.value = ('Введите число больше нуля');
    }
}
function opovesenie4() {
    if (ProcentnayaStavka.value > 100)
    {Procenti = false;
        ProcentnayaStavka.value = ('Максимальный процент 100%');}
}