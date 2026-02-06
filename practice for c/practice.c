#include<stdio.h>
int main{
    int m1,m2,m3,m4,m5,sum;
    float per;

    scanf("%d%d%d%d%d",&m1,&m2,&m3,&m4,&m5);
    sum = m1+m2+m3+m4+m5;
    per = sum/5.0;
    printf("Sum=%d\nPercentage=%.2f",sum,per);
    return 0;
}