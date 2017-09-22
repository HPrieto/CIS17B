/* 
 * File:   main.cpp
 * Author: Dr. Mark E. Lehr
 * Created on September 13, 2017, 11:43 AM
 * Purpose:  Used as C++ functions for testing
 *           the GET/POST of PHP/Javascript
 */

//System Libraries
#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

//User Libraries
#include "SavingsFunctions.h"

//Universal Global Constants here

//Function Prototypes

//Execution Begins Here!
int main(int argc, char** argv) {
    float pv=100;   //Present Value $'s
    float intr=6/100.0f;   //Interest Rate %
    int nYears=12;  //Number of compounding periods years

    //Perform Calculation / Call the function
    Savings savings = new Savings(pv,intr,nYears);
    float fv1=savings.save1();
    float fv2=savings.save2();
    float fv3=savings.save3();
    float fv4=savings.save4();
    float fv5=savings.save5();
    float fv6;
    save6(fv6);
    float *fv7=savings.save7();

    //Display the results
    cout<<"Present Value   = $"<<pv<<endl;
    cout<<"Interest Rate   =    "<<intr*100<<"%"<<endl;
    cout<<"Number of Years =   "<<nYears<<endl;
    cout<<"Future Value    = $"<<fv1<<endl;
    cout<<"Future Value    = $"<<fv2<<endl;
    cout<<"Future Value    = $"<<fv3<<endl;
    cout<<"Future Value    = $"<<fv4<<endl;
    cout<<"Future Value    = $"<<fv5<<endl;
    cout<<"Future Value    = $"<<fv6<<endl;
    display(fv7);
    
    //Deallocate memory
    delete []fv7;

    //Exit stage right
    return 0;
}