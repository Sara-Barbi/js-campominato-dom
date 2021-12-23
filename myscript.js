let go = document.getElementById("start");

go.addEventListener ("click", function(){
    let selezione = document.getElementById("myselect").value;
    let block = document.getElementById("block");  //creo una variabile per non riscrivere sempre document.getElem eccc..
    block.innerHTML = "";     //svuoto il div dei blocchi per far si che ogni volta che clicco go non mi sommi i blocchi dei diversi for
    let bombs = [];
    
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
    


//inserire 16 bombe diverse dentro un array


    const item = document.querySelectorAll(".num");
    
    functionBombs();
    


    function functionBombs() {  
        for (let i = 0; i < 16; i++) {                                      //creo un contatore che genera 16 elementi
           
            let randomBombs = Math.floor(Math.random()*item.length +1);     // creo una variabile di num randomici, con un massimo di quanti item ci sono per tabella +1, sennò ne creerebbe uno in meno e partendo dallo 0
           
           
            if(bombs.includes(randomBombs)==true){                         //chiedo attraverso un IF : se l'elemento c'è nel mio array puoi pusharlo.
            
                i--;                                                        //elimina questo giro
                
                
            }else{                                                         //altrimenti
                
               bombs.push(randomBombs);                                    //pusho l'elemento random qualora non sia gia presente nel mio array
           
            }
        }
        console.log(bombs)                                                  //mostro gli elementi del mio array
        
       //nuova parte ricreata secondo il modello di Osnago, studiamolo


        for(let i = 0; i < item.length; i++) {                              //creo un contatore che scorre tutti gli item delle tabelle

                item[i].addEventListener("click", function() {              //abilito il click per tutti gli item delle tabelle
                
                    let valore = parseInt(this.innerHTML);                  // creo una variabile che mi da il numero di ciò che ho cliccato e gli toglie lo style. Dato che il mio array "bombs" include numeri, non items, chiedo il numero di ogni item cliccato
                
                    if (bombs.includes(valore)==true) {                    // creo un IF e gli chiedo se il mio array include quel numero che esce fuori dalla variabile cliccata
                       
                        this.classList.add("changered");                    // aggiungo il colore rosso qualora quel numero sia all'inyterno del mio array bombs
                   
                        cellView();
               
                }else{                                                     //altrimenti 
                    this.classList.add("change");                          //aggiungi il colore celeste
                }
            });
       





        // faccio la stessa cosa che ho fatto sopra, soplo che invece che aggiungere la classe all'elemento cliccato, aggiungo a tutti gli elementi dell'array la classe rossa
        // e a tutti gli elem fuori dell'array la classe celeste, e me li fa vedere tutti perche non sto lavorando con il click (function) dell'oggetto e con il "this" .
        //quindi automaticamente farà vedere tutti gli elementi dell'array rossi e gli altri celesti

            function cellView(){
                for(let i = 0; i < item.length; i++) {
                    
                    let valoreItem = parseInt(item[i].innerHTML);

                    if (bombs.includes(valoreItem)==true) {

                        item[i].classList.add("changered");

                    }else{

                        item[i].classList.add("change");

                    }
                    
                }
                
            }                                        
    }    
}});
