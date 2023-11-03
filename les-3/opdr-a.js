function shake(woordDatGeschudtMoetWorden){
    const characters = woordDatGeschudtMoetWorden.split('');
    for (let i = characters.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [characters[i], characters[j]] = [characters[j], characters[i]];
      }
      const geschudWoord = characters.join('');
      
      return geschudWoord
  }
    var woord1 = shake("sexswing")
    console.log(woord1)
    var woord2 = shake("appeltaart")
    console.log(woord2)
    var woord3 = shake("henry")
    console.log(woord3)
    var woord4 = shake("methylfenidaat")
    console.log(woord4)