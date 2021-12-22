let go = document.getElementById("start");

go.addEventListener ("click", function(){
    let selezione = document.getElementById("myselect").value;
    let block = document.getElementById("block");  //creo una variabile per non riscrivere sempre document.getElem eccc..
    block.innerHTML = "";     //svuoto il div dei blocchi per far si che ogni volta che clicco go non mi sommi i blocchi dei diversi for
   
    
    if(selezione=="easy"){  //se seleziono easy allora..
        for(let i=1; i<=100 ; i++){
            block.innerHTML += `<div class="quadrato num item-${i}">${i}</div>`;
        }
        
    }else if(selezione=="medium"){
        for(let index=1; index<=81 ; index++){
            block.innerHTML += `<div class="quadr num item-${index}">${index}</div>`;
        }
        
    }else if(selezione=="hard"){
        for(let j=1; j<=49 ; j++){
            block.innerHTML += `<div class="qua num item-${j}">${j}</div>`;
        }
    }   
    
    let num = document.getElementsByClassName("num");       //richiamo l'elemento che esiste solo dentro alla funzione, dentro alla funzione.
    for(i=0; i<num.length; i++){                            //parte da 0 e abilita tutti i num perche faccio num.lenght
        num[i].addEventListener("click", cellaClick);       //inserisco una click,function a ciascun num, quindi scrivo num[i] (Ascoltatore di ogni elemento).
       }                                                    //richiamo la funzione che ho ceato dopo per ciascun elemento.
    
    const posizioniList = generaBombe();
    
    //potevo scrivere direttamente la function all'interno del for                                                  
    
    function cellaClick(){ 
       const valoreCella = parseInt(this.textContent);     //creo una variabile che mi restituisce il valore dell'elem. cliccato              
       this.classList.add("change");                       //aggiungo a quell'elem la classe change
       console.log(valoreCella);
    }
 
  

    //16 bombe in modo casuale con un math random. per non far uscire lo stesso num, ogni volta che estraggo una posiz, la metto in un array. e utilizzare l'if pe
    

    function generaBombe(){
        let bombe = [];
        let bombeTotali = 16;
        //tentativiPossibili = num.length - bombeTotali;


        //generiamo le bombe
       while(bombe.lenght < num.length ){
           let newPosition = generaRandomInt (1, bombeTotali);
           if(bombe.includes(newPosition)){
               bombe.push(newPosition)
               console.log(bombe[i]);
           }else 

           
           
           console.log(bombe);
       }
       return bombe; 
    }
 /*     
    function generaElementoArrayDopp(arrayValori, valore){
        for(let i=0; i<bombe.lenght; i++){
            if(arrayValori[i]==valore){
                return true
            }
        }
        return false
    }
    function generaRandomInt(min, max) {
        let result = Math.floor(Math.random * (min - max +1))+min;
        return result
    }
    
    function fineGioco(){
        const listaCelle = document.querySelectorAll("num");
        for(let i= 0; i< listaCelle.length; i++){
            const cella = listaCelle[i]
            const valorerCella = parseInt(this.querySelector("div").textContent); 
            if(generaElementoArrayDopp(bombe ,valoreCella) {
                cella.classList.add("changered")
            }
        }
        console.log("FINE");
    }
    
    function cellaClick(){ 
        const valorerCella = parseInt(this.querySelector("div").textContent);  
        if(generaElementoArrayDopp(bombe,valoreCella)){
            this.classList.add("changered")
            fineGioco();
        }else{
            this.classList.add("change")
        }                   
        console.log(valoreCella);
    }
    
    */
    }
    
    
    
    
    
);
