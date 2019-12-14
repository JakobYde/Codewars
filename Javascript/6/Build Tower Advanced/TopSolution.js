function towerBuilder(nFloors, nBlockSz) {
  const w = nBlockSz[0], h = nBlockSz[1];
  const tower = [];
  
  for (let floor = 1; floor <= nFloors; floor++) {
    let stars = '*'.repeat(w * (floor * 2 - 1));
    let space = ' '.repeat(w * (nFloors - floor));
    for (let i = 0; i < h; i++) {
      tower.push(space + stars + space);
    }
  }
  
  return tower;
}

function towerBuilder(n, [x,y]) {
  return [...Array(n)].reduce((a,b,i)=>a.concat(Array(y).fill(" ".repeat((n-i-1)*x)+"*".repeat((i*2+1)*x)+" ".repeat((n-i-1)*x))),[])
}