var decimal=0;
function escribir0() {
    const y= document.getElementById("0").value;
    document.getElementById("enter").value=document.getElementById("enter").value+y;

}
function escribir1() {
    const y= document.getElementById("1").value;
    document.getElementById("enter").value=document.getElementById("enter").value+y;

}

function escribir2() {
    const y= document.getElementById("2").value;
    document.getElementById("enter").value=document.getElementById("enter").value+y;

}

function escribir3() {
    const y= document.getElementById("3").value;
    document.getElementById("enter").value=document.getElementById("enter").value+y;

}

function escribir4() {
    const y= document.getElementById("4").value;
    document.getElementById("enter").value=document.getElementById("enter").value+y;

}

function escribir5() {
    const y= document.getElementById("5").value;
    document.getElementById("enter").value=document.getElementById("enter").value+y;

}

function escribir6() {
    const y= document.getElementById("6").value;
    document.getElementById("enter").value=document.getElementById("enter").value+y;

}

function escribir7() {
    const y= document.getElementById("7").value;
    document.getElementById("enter").value=document.getElementById("enter").value+y;

}

function escribir8() {
    const y= document.getElementById("8").value;
    document.getElementById("enter").value=document.getElementById("enter").value+y;

}
function escribir9() {
    const y= document.getElementById("9").value;
    document.getElementById("enter").value=document.getElementById("enter").value+y;
}
function escribirDecimal(){
    if(decimal==0){
        const y= document.getElementById(".").value;
        document.getElementById("enter").value=document.getElementById("enter").value+y;
        decimal++;
    }
    else{
        
    }
    
}
    var cont = 0;
    var x1="";
    var signo="";
    var h="";
    var x2="";
    
function suma() {

    var h= document.getElementById("enter").value;

        if(h==""){
            alert("inserta algo");

        }

        else if (cont==0){

           x1=h;
           document.getElementById("enter").value="";
           cont++;
           console.log(x1);
           signo="+";
           decimal=0;
        }
        else{
            x1 = parseFloat(x1);
            var x2=h;
            x2=parseFloat(x2);
            document.getElementById("enter").value=x1+x2;
            cont=0;
    }
}
    function resta() {

        var h= document.getElementById("enter").value;

            if(h==""){
                alert("inserta algo");
                
            }

            else if (cont==0){
                
               x1=h;
               document.getElementById("enter").value="";
               cont++;
               console.log(x1);
               signo="-";
               decimal=0;
            }
            else{  
                x1 = parseFloat(x1);
                var x2=h;
                x2=parseFloat(x2);
                cont=0;
                document.getElementById("enter").value=x1-x2;
        }

    }

    function mult() {
        var h= document.getElementById("enter").value;

            if(h==""){
                alert("inserta algo");

            }
            else if (cont==0){

               x1=h;
               document.getElementById("enter").value="";
               cont++;
               console.log(x1);
               signo="*";
               decimal=0;
            }
            else{
                x1 = parseFloat(x1);
                var x2=h;
                x2=parseFloat(x2);
                cont=0;
                document.getElementById("enter").value=x1*x2;
        }

    }

    function divide() {

        var h= document.getElementById("enter").value;

            if(h==""){
                alert("inserta algo");

            }
            else if (cont==0) {
               x1=h;
               document.getElementById("enter").value="";
               cont++;
               console.log(x1);
               signo="/";
               decimal=0;
            }
            else {
                
                x1 = parseFloat(x1);
                var x2=h;
                x2=parseFloat(x2);
                cont=0;
                if(x2==0){
                    document.getElementById("enter").value="Math Err";
                }
                else{
                    document.getElementById("enter").value=x1/x2;
                }
             
        }
    
    }

    function igual(){
        switch (signo) {

            case "+":
            h= document.getElementById("enter").value;
            x1 = parseFloat(x1);
            var x2=h;
            x2=parseFloat(x2);
            document.getElementById("enter").value=x1+x2;
            cont=0;
            signo="";

                break;

            case "-":
                h= document.getElementById("enter").value;
                x1 = parseFloat(x1);
                var x2=h;
                x2=parseFloat(x2);
                cont=0;
                document.getElementById("enter").value=x1-x2;

            break;

            case "*":
                h= document.getElementById("enter").value;
                x1 = parseFloat(x1);
                var x2=h;
                x2=parseFloat(x2);
                cont=0;
                document.getElementById("enter").value=x1*x2;

            break;

            case "/":
                h= document.getElementById("enter").value;
                x1 = parseFloat(x1);
                var x2=h;
                x2=parseFloat(x2);
                cont=0;
                if(x2==0){
                    document.getElementById("enter").value="Math Err"
                }
                else{
                    document.getElementById("enter").value=x1/x2;
                }
                
            break;
        
            default:
                break;
        }
        
    }

    function c() {
        x1="";
        document.getElementById("enter").value="";
    }
    
    
    
