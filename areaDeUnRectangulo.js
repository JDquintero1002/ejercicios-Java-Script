function calcDistance(startPoint, endPoint) {
  let diffX, diffY;
  diffX = startPoint.x - endPoint.x;
  diffY = startPoint.y - endPoint.y;
  let dist = Math.sqrt(diffX * diffX + diffY * diffY);
  return dist;
}

function calcRectArea(p0, p1, p2, p3) {
  let distsArr, maxDist, maxIdx, area;
  distsArr = new Array(3);

  distsArr[0] = calcDistance(p0, p1);
  distsArr[1] = calcDistance(p0, p2);
  distsArr[2] = calcDistance(p0, p3);

  maxDist = Math.max(...distsArr);
  maxIdx = distsArr.indexOf(maxDist);
  distsArr.splice(maxIdx, 1);

  area = distsArr[0] * distsArr[1];
  return area;
}

let pA, pB, pC, pD, areaResult;

pA = { x: 25, y: 40 };
pB = { x: 10, y: 20 };
pC = { x: 25, y: 20 };
pD = { x: 10, y: 40 };

areaResult = calcRectArea(pA, pB, pC, pD);
console.log(areaResult);