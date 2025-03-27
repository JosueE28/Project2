let operadores = ['*', '+', '-', '/'];
    let operador = ['%'];
    let punto = ['.'];

    let botones = document.querySelectorAll(".btn");
    let printer = document.querySelector('.result');
    let match = '';
    let calculo = '', calculoconcat = '', cont=0, operationtype='', ultimocaracter='', ultimocaracterpunto='', ultimocaracterp='', regex=/(\d+)\s*([+\-\/\*])\s*(\d+)%|(\d+)%/;
    let specialbuttons = document.querySelectorAll('.special');
    let todoslosbotones = [...botones];
    
     todoslosbotones.forEach(boton=>{

        boton.addEventListener('click', ()=>{
           
            if(boton.classList.contains('black')){

                cont++;
                calculoconcat+= boton.value;
                printer.value=calculoconcat;

            }
            if(boton.classList.contains('special') && cont>0 ){

                ultimocaracter = calculoconcat.slice(-1);

                if(operadores.includes(ultimocaracter)){

                    console.log('xd');
                }else{

                   calculoconcat+= boton.value;
                   printer.value+=boton.value;

                
                 }        
                }

                if (boton.classList.contains('equal')){

                    if(match[2]=='+' ){
                        operationtype='suma';
                    }
                    else if(match[2]=='-'){
                        operationtype='resta';
                    }
                    else if(match[2]=='/'){
                        operationtype='division';
                    }
                    else if(match[2]=='*'){
                        operationtype='multiplicacion';
                    }
                    else if(match[4]){
                        operationtype='normal';
                    }

                    switch(operationtype){
                        case 'suma': 
                            calculoconcat = calculoconcat.replace(/(\d+)\s*([+])\s*(\d+)%/, (match, p1, p2, p3) =>{
                                return Number(p1) + (Number(p1) * (Number(p3)/100));
                            })
                            console.log(calculoconcat)

                        break;
                        case 'resta': 
                            calculoconcat = calculoconcat.replace(/(\d+)\s*([-])\s*(\d+)%/, (match, p1, p2, p3) =>{
                                    return Number(p1) - (Number(p1)* (Number(p3)/100));
                                })
                        break;
                        case 'division': 
                            calculoconcat = calculoconcat.replace(/(\d+)\s*([/])\s*(\d+)%/, (match, p1, p2, p3) =>{
                                return Number(p1) / (Number(p3)/100);
                            })
                            console.log('division')
                        break;
                        case 'multiplicacion': 
                            calculoconcat = calculoconcat.replace(/(\d+)\s*([*])\s*(\d+)%/, (match, p1,p2, p3) =>{
                                return Number(p1) * (Number(p3)/100);
                            })
                            console.log(calculoconcat)

                        break;
                        case 'normal': 
                         calculoconcat = calculoconcat.replace(/(\d+)%/, (match, pi) =>{
                            return Number(pi) * 1/100;
                         }); 
                        console.log(calculoconcat)
                        break;
                        
                    }
                    calculoconcat=String(eval(calculoconcat));
                    printer.value=calculoconcat;
                }

                if(boton.classList.contains('ac')){
                    calculoconcat='';
                    printer.value=0;
                }

                if(boton.classList.contains('dab')){
                    ultimocaracterpunto = calculoconcat.slice(-1);
                    if(punto.includes(ultimocaracterpunto)){
                        console.log('estamos bien vergas');
                    } else{
                        calculoconcat+='.';
                        printer.value=calculoconcat;
                    }
                }

                if(boton.classList.contains('del')){
                    calculoconcat = calculoconcat.slice(0, -1);
                    printer.value=calculoconcat;
                }

                if(boton.classList.contains('%')){
                    ultimocaracterp = calculoconcat.slice(-1);
                    
                    if(operador.includes(ultimocaracterp)){
                        console.log('jajaj po')
                    }else{
                        calculoconcat+='%';
                        printer.value+='%';
                    
                        match = calculoconcat.match(regex);
                        if(match){
                        console.log('vas bien pa'+match[0]);
                        console.log('vas bien pa'+match[1]);
                        console.log('vas bien pa'+match[2]);
                        console.log('vas bien pa'+match[3]);
                        console.log('vas bien pa'+match[4]);


                        
                            }else{
                                console.log('no');
                            }
                    }
                   
                }
        })        
        
    })
    