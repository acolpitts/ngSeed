function ProductsCtrl ($scope, $http, $modal, $log) {

    $scope.currentProduct = null;

    product_callback = function(data) {
        $scope.currentProduct = data;

        var modalInstance = $modal.open({
            templateUrl: 'productDetails.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                product: function () {
                    return $scope.currentProduct;
                }
            }
        });

        return true;
    }

    $scope.open = function (sku) {
        var url = "http://www.bestbuy.ca/api/v2/json/product/" + sku + "?callback=product_callback";
        $http.jsonp(url);
    };
}

