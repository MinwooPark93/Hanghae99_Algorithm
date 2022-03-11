// 내 풀이 방법

function solution(num) {
    var answer = '';
    
    if (num % 2 == 0) {
        answer = 'Even';
    }
    else {
        answer = 'Odd';
    }
    return answer;
}

console.log(solution(1));


// 상위권 랭크 풀이 방법

function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

console.log(evenOrOdd(2));


// 위랑 비슷한 식이지만 괄호 사용

function oddOrEven(num) {
  return (num % 2)? "Odd":"Even";
}

console.log(oddOrEven(3))

// 삼항연산자에 대해서 공부해 볼 필요가 있음