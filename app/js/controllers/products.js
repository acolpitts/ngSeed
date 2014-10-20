function ProductsCtrl ($scope, $http, $modal, $log) {

    $scope.currentProduct = null;

    product_callback = function(data) {
        // returning from async callbacks is (generally) meaningless
        console.log(data);
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


    }

    $scope.open = function (sku) {
        //$log.info('ID: ' + sku);

        var url = "http://www.bestbuy.ca/api/v2/json/product/" + sku + "?callback=product_callback";
        $http.jsonp(url);




    };
}

