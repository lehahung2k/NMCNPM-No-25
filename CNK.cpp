#include<bits/stdc++.h>
using namespace std;
 
// Returns nCr % p.  In this Lucas Theorem based program,
// this function is only called for n < p and r < p.
typedef unsigned long long twolong;
int nCrModpDP(twolong n, twolong r, twolong p)
{
    // The array C is going to store last row of
    // pascal triangle at the end. And last entry
    // of last row is nCr
    int C[r+1];
    memset(C, 0, sizeof(C));
 
    C[0] = 1; // Top row of Pascal Triangle
 
    // One by constructs remaining rows of Pascal
    // Triangle from top to bottom
    for (twolong i = 1; i <= n; i++)
    {
        // Fill entries of current row using previous
        // row values
        for (twolong j = min(i, r); j > 0; j--)
 
            // nCj = (n-1)Cj + (n-1)C(j-1);
            C[j] = (C[j] + C[j-1])%p;
    }
    return C[r];
}
 

int nCrModpLucas(twolong n, twolong r, twolong p)
{
   if (r==0)
      return 1;
 
   int ni = n%p, ri = r%p;
 
   return (nCrModpLucas(n/p, r/p, p) *
           nCrModpDP(ni, ri, p)) % p;
}
 
int main()
{
    twolong test[10][3];
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <3; j++)  
            cin >> test[i][j];
    }
    for (int i = 0; i < n; i++) {
        cout << nCrModpLucas(test[i][0], test[i][1], test[i][2])<<endl;
    }

    
    return 0;
}