function myFunction()
{   
    const daySo = [];
    var num_min = document.getElementById("num_a").value;    
    var num_max = document.getElementById("num_b").value;   
    if (num_min > num_max){
        alert ("Vui lòng nhập lại, số a phải < b");
    }
    else{
        var total = 0; 
        for (let k = 2; k < num_max; k++){
            count = 0;
            for (let i = 1; i <= k; i++){
                if (k % i == 0){
                    count += 1;
                    }
                }
                if (count > 2) {
                    daySo.push();
                    count = 0;
                    }  
                else{ 
                    if (k >= num_min){
                        total += k;
                        daySo.push(k);}
                } 
            }
        //document.getElementById("demo").innerHTML = daySo;
        document.getElementById("demo").innerHTML = total;
    }
}