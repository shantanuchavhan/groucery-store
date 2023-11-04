var app = angular.module('myshopingList', [])
app.controller('myctrl', function ($scope) {
    //taking inputs 
    $scope.IsVisible = false;
    $scope.itemname=""
    $scope.Quantity=""
    $scope.photourl=""
    
    $scope.apple="apple"
    
    console.log($scope.records)
    $scope.customers = [
    ];
    //remove function
    $scope.remove=function (index, content) {
        console.log($scope.customers[index])
        if (index != -1) {
            $scope.customers.splice(index, 1);
        }
    };
    //add function
    $scope.addItem = function () {
        $scope.records = {item :$scope.itemname,Quantity : $scope.Quantity,photourl: $scope.photourl}
        $scope.customers.push($scope.records)
        console.log(customers,'jh')

        $scope.IsVisible = true;
    };

    //view function
    $scope.view= function(index){
        
        $scope.data=$scope.customers[index]
        
        window.localStorage.setItem("array", JSON.stringify($scope.data));
    



        window.open('./view.html')
        

    }
    
});

