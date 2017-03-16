function forLoop (array) {
  for (var i=1, i<=25; i++) {
    if (i=1) {
      array.unshift("I am 1 strange loop.")
    } else if (1<i && i<=25) {
      array.unshift(`I am ${i} strange loops.`)
    }
  }
  return array;
}
