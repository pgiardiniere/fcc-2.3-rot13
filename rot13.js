function rot13(str) { // LBH QVQ VG!
  //setup 2 arrays - original input & partner output
  //all input test data is strictly capital letters and spaces (must handle spaces)

  const inpChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  const outChar = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M']

  const strArr = str.split('');
  const arrOut = []
  let ind;

  for (i=0; i < strArr.length; i++) {
    //if index contains space, push space ' ' into arrOut
    if (/\s/.test(strArr[i])) arrOut.push(' ');
    //else, get the index of inpChar that matches current str char. feed that index to outChar to push the encoded value arrOut
    //per the error, need a compare function to find the index
    console.log(inpChar.findIndex(strArr[i]));
    //else arrOut.push(outChar[inpChar.findIndex(strArr[i])]);
  }
  console.log(arrOut);
  console.log(arrOut.join(''));
  return arrOut.join('');
}
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");