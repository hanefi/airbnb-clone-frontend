class UserController {
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

UserController.$inject = ['$http', 'UserModel'];

export default UserController;
