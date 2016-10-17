class UserModel {
  constructor($http, API_URL) {
    this.$http = $http
    this.API_URL= API_URL
    this.current_user = {}
  }

  get(id) {
    return this.$http.get(this.API_URL + '/users/' + id)
  }

  query() {
    return this.$http.get(this.API_URL + '/users')
  }

  login(credentials) {
    this.current_user = this.$http.post(
      this.API_URL + '/users/sessions', {user : credentials});
    return this.current_user;
  }

  current_user() {
    return this.current_user;
  }
}

UserModel.$inject = ['$http', 'API_URL']

export default UserModel
