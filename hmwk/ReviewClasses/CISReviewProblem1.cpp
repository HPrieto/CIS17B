#include <cstdlib>
#include <iostream>
#include <fstream>
using namespace std;

class Prob3Table
{
	protected:
		int rows;                                 //Number of rows in the table
		int cols;                                 //Number of cols in the table
		int *rowSum;                              //RowSum array
		int *colSum;                              //ColSum array
		int *table;                               //Table array
		int grandTotal;                           //Grand total
		void calcTable(void);                     //Calculate all the sums
	public:
		Prob3Table(char *,int,int);               //Constructor then Destructor
		~Prob3Table(){delete [] table;delete [] rowSum;delete [] colSum;};
		const int *getTable(void){return table;};
		const int *getRowSum(void){return rowSum;};
		const int *getColSum(void){return colSum;};
		int getGrandTotal(void){return grandTotal;};
};

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
      this->colSum[c] += this->table[(this->cols*r) + c];
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
  for (int r = 0; r < this->rows; r++) {
      //Allocate temp table columns
      temp[r] = new int[this->cols];
      for (int c = 0; c < this->cols; c++) {
          //Read file contents
          infile>>temp[r][c];
          //Set table values
          table[index] = temp[r][c];
          //Increment table index
          index++;
      }
  }
  //Free Memory
  for (int i = 0; i < this->rows; i++)
    delete [] temp[i];
  delete [] temp;
  calcTable();
  //Close file
  infile.close();
}

class Prob3TableInherited:public Prob3Table {
	protected:
		int *augTable;                                  //Augmented Table with sums
	public:
		Prob3TableInherited(char *,int,int);          //Constructor
		~Prob3TableInherited(){delete [] augTable;};  //Destructor
		const int *getAugTable(void){return augTable;}; 
};

/* Class Constructor */
Prob3TableInherited::Prob3TableInherited(char *file,int rows,int columns):
                        Prob3Table(file,rows,columns) {
  int index = 0;
  this->augTable = new int[(rows + 1) * (columns + 1)];
  //Input row values and row Sums
  for(int r = 0; r <= rows; r++) {
    for(int c = 0; c < columns; c++) {
      if (r * columns + c == ((columns * ((r - 1) + 1)) + (r - 1)))
        this->augTable[r * columns + c] = this->rowSum[r - 1];
      else {
        this->augTable[r * columns + c] = this->table[index];
        index++;
      }
    }
  }
  //Input column sums
  for (int c = 0; c < columns; c++)
    this->augTable[((rows * (columns + 1)) + c)] = this->colSum[c];
  //Bottom RightMost Value
  this->augTable[(((rows + 1) * (columns + 1)) - 1)] = this->grandTotal;
}

int main() {
	cout<<"Entering problem number 3"<<endl;
	int rows = 5;
	int cols = 6;
	Prob3TableInherited tab("Problem3.txt",rows,cols);
	const int *naugT=tab.getTable();
	for(int i=0;i<rows;i++) {
		for(int j=0;j<cols;j++) {
			cout<<naugT[i*cols+j]<<" ";
		}
		cout<<endl;
	}
	cout<<endl;
	const int *augT=tab.getAugTable();
	for(int i=0;i<=rows;i++) {
		for(int j=0;j<=cols;j++) {
			cout<<augT[i*(cols+1)+j]<<" ";
		}
		cout<<endl;
	}
	return 0;
}

/*

Example Input Table
   100   101   102   103   104   105
   106   107   108   109   110   111
   112   113   114   115   116   117
   118   119   120   121   122   123
   124   125   126   127   128   128

Example Output Table with rows summed,
columns summed and the grand total printed.
   100   101   102   103   104   105   615
   106   107   108   109   110   111   651
   112   113   114   115   116   117   687
   118   119   120   121   122   123   723
   124   125   126   127   128   128   758
   560   565   570   575   580   584  3434

*/