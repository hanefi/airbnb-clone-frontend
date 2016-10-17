class ProfileController {
  constructor($http, UserModel) {
    this.$http = $http;
    this.UserModel = UserModel;
  }

  $onInit() {
    this.UserModel.query()
      .then((response) => {
        this.users = response.data;
      });
  }
}

ProfileController.$inject = ['$http', 'UserModel'];

export default ProfileController;
