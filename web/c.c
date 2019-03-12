#include <stdio.h>
main(){
   int numAry[] = {1,0,0,0,0};
   int i, j;
   for(j = 0; j<5; ++j)
      for(i=0; i<j; ++i)
         numAry[j] += numAry[i];
   for(j=0; j<5;++j)
      printf("%d\n", numAry[j]);
}