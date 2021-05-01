function hacer() {
    const entrada = document.getElementById("enter").value;
    if (entrada.trim()== ""){
        alert("inserta algo");
    }

    else{
        const y = document.createElement("p");
        const x = document.createTextNode("hola "+entrada);
        y.appendChild(x);
        document.body.appendChild(y)
        document.getElementById("enter").value = "";
    }
   

}

function sumar() {
    var x = document.getElementById("enter").value;
    var y = document.getElementById("enter2").value;
    var x = parseInt(x);
    var y = parseInt(y);
    var result = x + y;
    console.log(result);
    document.getElementById("enter").value = "";
    document.getElementById("enter2").value = "";
    
}
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
    var cont = 0;
    var x1="";
    
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
        }
        else{
            
            x1 = parseInt(x1);
            var x2=h;
            x2=parseInt(x2);
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
            }
            else{
                
                x1 = parseInt(x1);
                var x2=h;
                x2=parseInt(x2);
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
            }
            else{
                
                x1 = parseInt(x1);
                var x2=h;
                x2=parseInt(x2);
                cont=0;
                document.getElementById("enter").value=x1*x2;
        }
    
    }

    function divide() {
        var h= document.getElementById("enter").value;
        
            if(h==""){
                alert("inserta algo");
        
            }
            else if (cont==0){
               
               x1=h;
               document.getElementById("enter").value="";
               cont++;
               console.log(x1);
            }

            else {
                
                x1 = parseInt(x1);
                var x2=h;
                x2=parseInt(x2);
                cont=0;
                if(x2==0){
                    document.getElementById("enter").value="Math Err"
                }
                else{
                    document.getElementById("enter").value=x1/x2;
                }
             
        }
    
    }

    function c() {
        x1="";
        document.getElementById("enter").value="";
    }
    
    
    
