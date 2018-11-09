var app = angular.module("primesPrinter", []); 

app.controller("printerCtrl", function($scope) {
    
    $scope.primesFound = [];

    $scope.printPrimes = function() {
        let n = $scope.numberToFindPrimes;
        if(n > 1) {
            $scope.primesFound = getPrimesLessThan(n);
        } else {
            $scope.primesFound.push('Invalid number');
        }
    }

    function getPrimesLessThan(n) {

        var A = [], R = [];

        A.length = n;
        A.fill(true);
        A[0] = false, A[1] = false;

        // Sieve of Eratosthenes algorithm
        for(i = 2; i <= Math.sqrt(n); i++) {
            if(A[i]) {
                for(j = Math.pow(i, 2); j < n; j+=i) {
                    A[j] = false;
                }
            }
        }
        A.forEach((x, i) => {
            if(x) R.push(i);
        })

        return R;
    }
});