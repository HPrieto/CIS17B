/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * File:   Prob3TableInherited.cpp
 * Author: Heriberto
 * 
 * Created on September 19, 2017, 4:40 PM
 */

#include "Prob3TableInherited.h"

/* Class Constructor */
Prob3TableInherited::Prob3TableInherited(char *file,int rows,int columns):
                        Prob3Table(file,rows,columns) {
  int index = 0;
  this->augTable = new int[(rows+1)*(columns+1)];
  //Input row values and row Sums
  for(int r = 0; r <= rows; r++) {
    for(int c = 0; c < columns; c++) {
      if (r * columns + c == ((columns * ((r-1) + 1)) + (r-1)))
        this->augTable[r*columns+c] = this->rowSum[r - 1];
      else {
        this->augTable[r*columns+c] = this->table[index];
        index++;
      }
    }
  }
  //Input column sums
  for (int c = 0; c < columns; c++)
    this->augTable[((rows*(columns+1))+c)] = this->colSum[c];
  //Bottom RightMost Value
  this->augTable[(((rows+1)*(columns+1))-1)] = this->grandTotal;
}

