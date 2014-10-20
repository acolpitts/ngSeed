var app = angular.module("bestbuyMVC", ['ngResource', 'ui.bootstrap']);

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, product) {

    $scope.currentProduct = product;

    $scope.imageURL = 'http://bestbuy.ca/multimedia/Products/300x300/' +
        $scope.currentProduct.sku.substr(0,3) + '/' +
        $scope.currentProduct.sku.substr(0,5) + '/' +
        $scope.currentProduct.sku + '.jpg';

    $scope.ok = function () {
        $modalInstance.close();
    };
});