class AppController {
  constructor(UserModel) {
  	this.UserModel = UserModel;
  }

  $onInit() {
  	this.user = {}
  }

  login() {
  	console.log("tried to login");
  	console.log(this.user);

  	this.UserModel.login(this.user).then( (response) => {
  		this.response = response;
  		console.log(this.response);
  	});
  }

  // AppController.$inject = ['UserModel'];
}

export default AppController;
