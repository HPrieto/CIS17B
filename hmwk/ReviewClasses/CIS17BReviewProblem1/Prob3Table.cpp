/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * File:   Prob3Table.cpp
 * Author: Heriberto
 * 
 * Created on September 19, 2017, 4:38 PM
 */

#include "Prob3Table.h"

void Prob3Table::calcTable() {
  int index = 0;
  this->rowSum  = new int[this->rows];
  this->colSum  = new int[this->cols];
  //Prepare rowSum and colSum for calculation
  for (int c = 0; c < this->cols; c++)
    this->colSum[c] = 0;
  for (int r = 0; r < this->rows; r++)
    this->rowSum[r] = 0;
  //Calculate Column Sum
  for (int r = 0; r < this->rows; r++) {
    for (int c = 0; c < this->cols; c++) {
      this->colSum[c] += this->table[(this->cols*r)+c];
    }
  }
  //Calculate RowSum
  for (int i = 0; i < (this->rows * this->cols)+1; i++) {
    if (i != 0 && (i % 6) == 0)
      index++;
    this->rowSum[index] += this->table[i];
  }
  //Calculate Grand Total
  this->grandTotal = 0;
  for (int c = 0; c < this->cols; c++)
    this->grandTotal += this->colSum[c];
}

/* Prob3Table Constructor */
Prob3Table::Prob3Table(char *file,int rows,int columns) {
  int index = 0;
  ifstream infile;
  infile.open(file,ios::in);
  this->rows  = rows;
  this->cols  = columns;
  this->table = new int[this->rows * this->cols];
  int **temp  = new int*[this->rows];
  //Allocate memory for 2DArray
  for (int r = 0; r < this->rows; r++)
    for (int c = 0; c < this->cols; c++) {
      //Allocate temp table columns
      temp[r] = new int[this->cols];
      //Read file contents
      infile>>temp[r][c];
      //Set table values
      table[index] = temp[r][c];
      //Increment table index
      index++;
    }
  //Free Memory
  for (int i = 0; i < this->rows; i++)
    delete [] temp[i];
  delete [] temp;
  calcTable();
  //Close file
  infile.close();
}

