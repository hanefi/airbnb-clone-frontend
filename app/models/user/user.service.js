class UserModel {
  constructor($http, API_URL) {
    this.$http = $http
    this.API_URL= API_URL
  }

  get(id) {
    return this.$http.get(this.API_URL + '/users/' + id)
  }

  query() {
    return this.$http.get(this.API_URL + '/users')
  }

  login(credentials) {
    return this.$http.post(this.API_URL + '/users/session', credentials);
  }


}

UserModel.$inject = ['$http', 'API_URL']

export default UserModel
