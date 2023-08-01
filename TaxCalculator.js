function taxCalculator(){
       let name = document.getElementById("employeeName").value;
       let employeeSalary = parseFloat(document.getElementById("employeeSalary").value);
   
       if(employeeSalary<=300000){
    
        document.getElementById("eName").value = `${name}`;
        document.getElementById("TD1").value = 0 ;
        document.getElementById("TD2").value = 0 ;
        document.getElementById("TD3").value = 0 ;
        document.getElementById("finalStatement").value=`Dear ${name} you are a tax free employee`

       }
       else if(employeeSalary <=600000){
        document.getElementById("eName").value = `${name}`;
         let tax1 = (employeeSalary - 300000)*0.1
         document.getElementById("TD1").value = `${tax1}`
         document.getElementById("TD2").value = 0;
         document.getElementById("TD3").value = `${tax1}`
         
        document.getElementById("finalStatement").value=`Dear ${name} your salary lies in slab-1 and you have to pay 10% of your salary as a tax`

       }
       else if(employeeSalary>600000){
        document.getElementById("eName").value = `${name}`;
        const  tax3 = 30000;
        let tax4 = (employeeSalary-600000)*0.2;
        let tax5 = tax3 + tax4 ; 


        document.getElementById("TD1").value = `${tax3}`
        document.getElementById("TD2").value = `${tax4}`
        document.getElementById("TD3").value = `${tax5}`
        document.getElementById("finalStatement").value= `Dear ${name} your salary lies in slab-2 and you have to pay 10% for upto 6 Lakhs & 20% for remaining amount of your salary as a tax`

       }

}
