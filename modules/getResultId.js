module.exports = (score) => {
  if(score > 7){
    return 10;
  } else if(score > 4){
    return 9;
  } else if(score > 2){
    return 8;
  } else{
    return 7;
  }
}