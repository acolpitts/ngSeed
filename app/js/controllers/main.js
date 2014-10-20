function MainCtrl ($scope, $http) {

    $scope.sidebarURL = 'partials/categoryList.html';

    onProducts = function(data) {
        // returning from async callbacks is (generally) meaningless
        console.log(data.subCategories);
        $scope.products = data.products;
    }

    var url = "http://www.bestbuy.ca/api/v2/json/search?categoryid=departments&callback=onProducts";
    $http.jsonp(url);

    $scope.loadProducts = function (catID) {
        var url = "http://www.bestbuy.ca/api/v2/json/search?categoryid=" + catID + "&callback=onProducts";
        $http.jsonp(url);
    }
}