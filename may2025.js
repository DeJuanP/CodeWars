// For example, for [1, 2, 2] it should return 9 because 
    //1^2 + 2^2 +2^2 = 9

    function squareSum(numbers){
        return numbers.reduce(function(sum, n){
          return (n*n) + sum;
        }, 0)
      }
  
      function squareSum(numbers){
        return numbers.reduce((sum,num) => sum + (num * num), 0);
      }