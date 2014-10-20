function CategoriesCtrl ($scope, $http) {

    // Default to all
   $scope.departments = null;

    jsonp_callback = function(data) {
        $scope.departments = data.subCategories;
    }

    $scope.init = function() {
        var url = "http://www.bestbuy.ca/api/v2/json/category/Departments?callback=jsonp_callback";
        $http.jsonp(url);
    }


    $scope.init();
}