#include "SavingsFunctions.H"
#include <cstdlib>
using namespace std;

//Savings with a for-loop
float Savings::save1(){
    for(int year=1;year<=this.nYears;year++){
        this.pv*=(1+this.intr);
    }
    return this.pv;
}

//Savings with a power function
float Savings::save2(){
    return this.pv*pow((1+this.intr),this.nYears);
}

//Savings with the exponential-log
float Savings::save3(){
    return this.pv*exp(this.nYears*log(1+this.intr));
}

//Savings with recursion
float Savings::save4(){
    return save4Rc(this.pv,this.intr,this.nYears-1)*(1+this.intr);
}

//Savings 4 functions recursion method
float Savings::save4Rc(float p,float i,int n) {
    if(n<=0)return p;
    return save4Rc(p,i,n-1)*(1+i);
}

//Savings with a defaulted parameter
float Savings::save5(){
    for(int year=1;year<=this.nYears;year++){
        this.pv*=(1+this.intr);
    }
    return this.pv;
}

//Savings with a reference object
void Savings::save6(float &fv){
    fv=this.pv*exp(this.nYears*log(1+this.intr));
}

//Savings with an array
float *Savings::save7(){
    //Declare an array
    float *fv=new float[this.nYears+1];
    //Calculate all the values in the array
    fv[0]=this.pv;
    for(int year=1;year<=this.nYears+1;year++){
        fv[year]=fv[year-1]*(1+this.intr);
    }
    return fv;
}

//Display the savings array
void Savings::display(float *fv){
    //Output the heading for our table
    cout<<endl;
    cout<<fixed<<setprecision(2)<<showpoint;
    cout<<"Years   Savings"<<endl;
    for(int year=0;year<this.nYears+1;year++){
        cout<<setw(5)<<year;
        cout<<setw(10)<<fv[year]<<endl;
    }
    cout<<endl;
}