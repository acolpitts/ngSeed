function CategoriesCtrl ($scope, $http) {


    $scope.currentCategory = "departments";


    jsonp_callback = function(data) {
        // returning from async callbacks is (generally) meaningless
        console.log(data.subCategories);
        $scope.departments = data.subCategories;
    }

    var url = "http://www.bestbuy.ca/api/v2/json/category/Departments?callback=jsonp_callback";
    $http.jsonp(url);


    $scope.changeCategory = function (catID) {
        $scope.loadProducts(catID);
    }
}