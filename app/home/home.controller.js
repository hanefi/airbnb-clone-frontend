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
        for (var i = this.listings.length - 1; i >= 0; i--) {
          this.listings[i].user = this.UserModel.get(
            this.listings[i].user_id)
        }
      });
  }
}

HomeController.$inject = ['$http', 'ListingModel', 'UserModel'];

export default HomeController;
