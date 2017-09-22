/* 
 * File:   main.cpp
 * Author: Dr. Mark E. Lehr
 * Created on September 13, 2017, 11:43 AM
 * Purpose:  Used as C++ functions for testing
 *           the GET/POST of PHP/Java-script
 */
#ifndef SAVINGSFUNCTIONS_H
#define SAVINGSFUNCTIONS_H

class Savings {
private:
    float pv;
    float intr;
    int nYears;
public:
    /* Savings Class Constructor */
    Savings(float pv,float intr,int nYears){
        this.pv = pv;
        this.intr = intr;
        this.nYears = nYears;
    }

    //Savings with a for-loop
    float save1();

    //Savings with a power function
    float save2();

    //Savings with the exponential-log
    float save3();

    //Savings with recursion
    float save4();

    //Savings 4 recursion recursion method
    float save4Rc(float,float,int);

    //Savings with a defaulted parameter
    float save5();

    //Savings with a reference object
    void save6(float);

    //Savings with an array
    float *save7(float,float,int);

    //Display the savings array
    void display(float,int);
};

#endif /* SAVINGSFUNCTIONS_H */

