//This function is to compute the interest according to the number of years and current rate
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = prinicpal * rate /100;

    //This variable is used to get the correct date and add the amount of years selected to display
    var year = new Date().getFullYear()+parseInt(years);
    //This element is used to display text to the user that shows how much interest is earned according to the amounts entered
    document.getElementById("result").innerHTML="If you deposit"+prinicpal+",\<br\>at an interest rate of"+rate+"%\<br\>You will receive an amount of "+amount+",\<br|>in the year"+year+"\<br\>"
}
//This function is to display a number proportional to the slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        