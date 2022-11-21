function bread(){
    var breadline = document.getElementById("input").value
    console.log(breadline)

    var doughball0 = breadline.charCodeAt(0);
    var doughball1 =  breadline.charCodeAt(1); 
    var doughball2 = breadline.charCodeAt(2); 
    var doughball3 = breadline.charCodeAt(3); 
    var doughball4 = breadline.charCodeAt(4); 
    var doughball5 = breadline.charCodeAt(5); 
    var doughball6 = breadline.charCodeAt(6); 
    var doughball7 = breadline.charCodeAt(7); 
    var doughball8 = breadline.charCodeAt(8); 


    console.log(doughball0, doughball1, doughball2, doughball3, doughball4, doughball5, doughball6, doughball7, doughball8)

    var bag = document.getElementById("code").value
    console.log(bag)

    var breadlineoven0 = doughball0 * bag;
    var breadlineoven1 = doughball1 * bag;
    var breadlineoven2 = doughball2 * bag;
    var breadlineoven3 = doughball3 * bag;
    var breadlineoven4 = doughball4 * bag;
    var breadlineoven5 = doughball5 * bag;
    var breadlineoven6 = doughball6 * bag;
    var breadlineoven7 = doughball7 * bag;
    var breadlineoven8 = doughball8 * bag;


    console.log("BreadLineBaker: ")
    console.log(breadlineoven0)
    console.log(breadlineoven1)
    console.log(breadlineoven2)
    console.log(breadlineoven3)
    console.log(breadlineoven4)
    console.log(breadlineoven5)
    console.log(breadlineoven6)
    console.log(breadlineoven7)
    console.log(breadlineoven8)

    

    
    document.getElementById("loaf0").innerHTML = breadlineoven0 +' '
    document.getElementById("loaf1").innerHTML = breadlineoven1 +' '
    document.getElementById("loaf2").innerHTML = breadlineoven2 +' '
    document.getElementById("loaf3").innerHTML = breadlineoven3 +' '
    document.getElementById("loaf4").innerHTML = breadlineoven4 +' '
    document.getElementById("loaf5").innerHTML = breadlineoven5 +' '
    document.getElementById("loaf6").innerHTML = breadlineoven6 +' '
    document.getElementById("loaf7").innerHTML = breadlineoven7 +' '
    document.getElementById("loaf8").innerHTML = breadlineoven8 +' '

}

function debread(){
    var dedoughball0 = document.getElementById("debread0").value
    var dedoughball1 = document.getElementById("debread1").value
    var dedoughball2 = document.getElementById("debread2").value
    var dedoughball3 = document.getElementById("debread3").value
    var dedoughball4 = document.getElementById("debread4").value
    var dedoughball5 = document.getElementById("debread5").value
    var dedoughball6 = document.getElementById("debread6").value
    var dedoughball7 = document.getElementById("debread7").value
    var dedoughball8 = document.getElementById("debread8").value


    console.log(dedoughball0, dedoughball1, dedoughball2, dedoughball3, dedoughball4, dedoughball5, dedoughball6, dedoughball7, dedoughball8)

    var bag = document.getElementById("code").value
    console.log(bag)

    var breadlineoven0 = String.fromCharCode(dedoughball0 / bag);  
    var breadlineoven1 = String.fromCharCode(dedoughball1 / bag);  
    var breadlineoven2 = String.fromCharCode(dedoughball2 / bag);  
    var breadlineoven3 = String.fromCharCode(dedoughball3 / bag);  
    var breadlineoven4 = String.fromCharCode(dedoughball4 / bag); 
    var breadlineoven5 = String.fromCharCode(dedoughball5 / bag); 
    var breadlineoven6 = String.fromCharCode(dedoughball6 / bag); 
    var breadlineoven7 = String.fromCharCode(dedoughball7 / bag); 
    var breadlineoven8 = String.fromCharCode(dedoughball8 / bag); 

    

    
    document.getElementById("deloaf0").innerHTML = breadlineoven0 
    document.getElementById("deloaf1").innerHTML = breadlineoven1 
    document.getElementById("deloaf2").innerHTML = breadlineoven2 
    document.getElementById("deloaf3").innerHTML = breadlineoven3 
    document.getElementById("deloaf4").innerHTML = breadlineoven4 
    document.getElementById("deloaf5").innerHTML = breadlineoven5
    document.getElementById("deloaf6").innerHTML = breadlineoven6 
    document.getElementById("deloaf7").innerHTML = breadlineoven7 
    document.getElementById("deloaf8").innerHTML = breadlineoven8 

}