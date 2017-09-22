<?php
/*    
    Dr. Mark E. Lehr
    September 11th, 2017
    Savings function implemented 7 different ways
 
 */
class Savings {
    //Savings Class Member Variables
    var $pv;
    var $intr;
    var $nYears;
    //Savings Class Functions
    function __construct($pv,$intr,$nYears) {
        $this->pv = $pv;
        $this->intr = $intr;
        $this->nYears = $nYears;
    }
    //Savings with a for-loop
    function save1(){
        $pVal = $this->pv;
        for($year=1;$year<=$this->nYears;$year++){
            $pVal*=(1+$this->intr);
        }
        return $pVal;
    }

    //Savings with a power function
    function save2(){
        return $this->pv*pow(1+$this->intr,$this->nYears);
    }

    //Savings with the exponential-log
    function save3(){
        return $this->pv*exp($this->nYears*log(1 + $this->intr));
    }

    //Savings with recursion
    function save4($pv=$this->pv,$intr=$this->intr,$nYears=$this->nYears){
        if($nYears<=0){return $pv;}
        else{return save4($pv,$intr,$nYears-1)*(1+$intr);}
    }

    //Savings with a default parameter
    function save5($intr=0.06){
        $pVal = $this->pv;
        for($year=1;$year<=$this->nYears;$year++){
            $pVal*=(1+$this->intr);
        }
        return $pVal;
    }

    //Savings with a reference parameter
    function save6(&$fv){
        $fv=$this->pv*exp($this->nYears*log(1+$this->intr));
    }

    //Savings with an array
    function save7(){
        //Declare an array
        $fv=array();
        //Fill the array
        $fv[0]=$this->pv;
        for($year=1;$year<=$this->nYears;$year++){
            $fv[$year]=$fv[$year-1]*(1+$this->intr);
        }
        return $fv;
    }

    //Display the savings array
    function display($fv){
        echo '<table width="200" border="1">';
        echo "<tr><th>Year</th><th>Savings</th></tr>";
        for($year=0;$year<count($fv);$year++){
            echo "<tr>";
            echo "<td>".$year."</td>";
            echo "<td>".number_format($fv[$year],2)."</td>";
            echo "</tr>";
        }
        echo "</table>";
    }
}