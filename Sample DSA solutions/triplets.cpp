/*Given an arrray on n distinct integers,d =[d[0],d[1],,,,,,d[n-1]], and an integer threshold,t,how many (a,b,c) index triplets exist that satisfy both the following conditions*/
#include<stdio.h>
#include <iostream>
using namespace std;
long int triplets (int t,int d[],int n) //triplets function 
{     
    long int c=0;
    for(int i=0;i<n;i++){
        for(int j=0; j<n;j++){
            for(int k=0;k<n;k++){
                if(d[i]<d[j] && d[j]<d[k] && (d[i]+d[j]+d[k])<=t)
                    c++;
            }
        }
    }
    return c; 
}         

int main(){
    int t,n,d[100]; //declaration of variables
    cin>>t; //getting input from console
    cin>>n;
    for(int i=0;i<n;i++)
        cin>>d[i];
        cout<<"output:\n"<<triplets (t, d, n) <<endl; //calling triplet function
}





