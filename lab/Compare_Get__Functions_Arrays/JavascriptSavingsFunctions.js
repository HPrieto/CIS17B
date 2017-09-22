/*    
    Dr. Mark E. Lehr
    September 11th, 2017
    Savings function implemented 7 different ways

 */
class Savings {
    //Savings class constructor
    constructor(pv=0,intr=0,nYears=0) {
        this.pv = pv;
        this.intr = intr;
        this.nYears = nYears;
    }
    //Savings with a for-loop
    save1(){
        var pVal = this.pv
        for(var year=1;year<=this.nYears;year++){
            pVal*=(1+this.intr);
        }
        return pVal;
    }

    //Savings with a power function
    save2(){
        return this.pv*Math.pow((1+this.intr),this.nYears);
    }

    //Savings with the exponential-log
    save3(){
        return this.pv*Math.exp(this.nYears*Math.log(1+this.intr));
    }

    //Savings with recursion
    save4(pv=this.pv,intr=this.intr,nYears=this.nYears){
        if(nYears<=0)return pv;
        return this.save4(pv,intr,nYears-1)*(1+intr);
    }

    //Savings with a defaulted parameter
    save5(){
        var pVal = this.pv;
        for(var year=1;year<=this.nYears;year++){
            pVal*=(1+this.intr);
        }
        return pVal;
    }

    //Savings with a reference object
    save6(fv){
        fv.save=this.pv*Math.exp(this.nYears*Math.log(1+this.intr));
    }

    //Savings with an array
    save7(){
        //Declare an array
        var fv=new Array();
        //Calculate all the values in the array
        fv[0]=this.pv;
        for(var year=1;year<=this.nYears;year++){
            fv[year]=fv[year-1]*(1+this.intr);
        }
        return fv;
    }

    //Display the savings array
    display(fv){
        //Output the heading for our table
        document.write('<table width="200" border="1">');
        document.write("<tr><th>Years</th><th>Savings</th></tr>");
        for(var year=0;year<fv.length;year++){
            document.write("<tr>");
            document.write("<td>"+year+"</td>");
            var x=1*fv[year];
            document.write("<td>$"+x.toFixed(2)+"</td>");
            document.write("</tr>");
        }
        document.write("</table>"); 
    }
}