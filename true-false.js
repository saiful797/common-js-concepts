 /*
Truthy:
1. true
2. any number (+ve, -ve) will be return true
3. any string other than empty string
4. '0', 'false'
5. {}
6. []

Falsy:
1. false
2. 0
3. "" (empty string)
4. null
5. undefined
*/

  const x = false;
  if(x){
    console.log('value of x is truthy');
  }

  else{
    console.log('value of x is falsy');
  }