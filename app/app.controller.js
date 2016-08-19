class AppController {
  constructor(UserModel) {
  	console.log("constructor")
  	var vm = this;
  	this.UserModel = UserModel;

  	this.current_user = {}
  }

  $onInit() {
  	this.user = {}
  }

  login() {
  	if (this.current_user.token)
  	{
  		console.log("already logged in")
  		console.log(this.current_user)
  		return this.current_user
  	}
  	console.log("tried to login");
  	console.log(this.user);

  	this.UserModel.login(this.user).then( (response) => {
  		this.response = response;
  		this.current_user = response.data.user
  		console.log(this.response);
  	});
  }

  // AppController.$inject = ['User'];
}

export default AppController;
