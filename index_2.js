// 프로그래머스 알고리즘 직사각형 별찍기

function starBox() {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);

  for(let i = 0; i < b; i++) {
    console.log('*'.repeat(a))
  }
}