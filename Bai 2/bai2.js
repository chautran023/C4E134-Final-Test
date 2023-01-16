function numberOneTriangle()
{
    var n = document.getElementById("n").value;    
    if (n > 10){
        alert ("Vui lòng nhập lại, số nguyên phải là số nguyên <= 10");
    }
    else{
        for (i = 0; i < n; i++){
            for (j = 0; j <= i; j++){
                document.writeln ("*");
            }
            document.writeln ("</br>");
        }
    }     
}