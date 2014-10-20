function MainCtrl ($scope, $http) {

    $scope.sidebarURL = 'partials/categoryList.html';
    $scope.currentCategory = {id: 'departments'};
    $scope.products = null;

    onProducts = function(data) {
        $scope.products = data.products;
    }

    $scope.loadProducts = function (catID) {
        var url = "http://www.bestbuy.ca/api/v2/json/search?categoryid=" + catID + "&callback=onProducts";
        $http.jsonp(url);
    }

    $scope.changeCategory = function (cat) {
        $scope.currentCategory = cat;
        $scope.loadProducts(cat.id);
    }

    // Init view by loading all products
    $scope.loadProducts('departments');
}