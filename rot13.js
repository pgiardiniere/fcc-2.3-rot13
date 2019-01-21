"use strict";
function rot13(str) { // LBH QVQ VG!
  //setup 2 arrays - original input & partner output
  //all input test data is strictly capital letters and spaces (must handle spaces)

  const inpChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const outChar = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M']

  const strArr = str.split('');
  const arrOut = []

  for (let i=0; i < strArr.length; i++) {
    //if index contains space, push space ' ' into arrOut
    if (/\W/.test(strArr[i])) arrOut.push(strArr[i]);
    
    //else, index transposal. for current char in strArr, find index in inpChar, then access that index in outchar, push it to arrOut
    else arrOut.push(outChar[inpChar.indexOf(strArr[i])]);
  }  
  return arrOut.join('');
}
  
  // Change the inputs below to test
  rot13("LBH QVQ VG");