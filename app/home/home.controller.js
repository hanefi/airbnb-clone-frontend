class HomeController {
  constructor($http, ListingModel, UserModel) {
    this.$http = $http;
    this.ListingModel = ListingModel;
    this.UserModel = UserModel
  }

  $onInit() {
    this.ListingModel.query()
      .then((response) => {
        this.listings = response.data;
      });
  }
}

HomeController.$inject = ['$http', 'ListingModel', 'UserModel'];

export default HomeController;
