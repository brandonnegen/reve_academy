$scope.addToCollection = function(release, username){
    return $http.post('/collection', [release, username])
        .then($scope.itemAdded());
};


$scope.viewCollection = function(username){
    $scope.collectionFlag = false;
    $scope.pageCountFlag = false;
    $scope.deleteFlag = true;
    $scope.flag = false;
    return $http.post('/collection/entire', {username: username}).then(function(response){
        if(response.status !== 200){
            throw new Error('Failed to get your MusicLibe')
        }
        $scope.databaseResults = response.data[0].albums;
        return response.data[0].albums;
    });
};

$scope.viewCds = function(username){
    $scope.collectionFlag = false;
    $scope.pageCountFlag = false;
    $scope.deleteFlag = true;
    $scope.flag = false;
    return $http.post('/collection/cds', {username: username}).then(function(response){
        if(response.status !== 200){
            throw new Error('Failed to get the CD collection')
        }
        var cd = 'cd';
        var cdArray = [];
        for (var i = 0; i <response.data[0].albums.length; i++) {
            if ((response.data[0].albums[i].format.search(/cd/i) !== -1)) {
                cdArray.push(response.data[0].albums[i]);
            }
        }
        if (cdArray.length > 0){
            $scope.databaseResults = cdArray;
        }
        else $scope.noResults();
        $scope.collectionForm = {};
        return cdArray;
    });
};

$scope.deleteFromCollection = function(query, username) {
    $scope.collectionFlag = false;
    $scope.pageCountFlag = false;
    $scope.deleteFlag = true;
    $scope.flag = false;
    if(confirm("Are you sure you want to delete this item from your Archive?")){
        return $http.post('/collection/delete', [query, username]).then(function(response) {
            if (response.status !== 200) {
                throw new Error('Failed to delete from the collection')
            }
            $scope.databaseResults = response.data[0].albums;
            return response.data[0].albums;
        });
    }
};