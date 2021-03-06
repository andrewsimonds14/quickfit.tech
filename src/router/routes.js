const Routes = {
	//Landing
	toLanding: () => '/',
	//Login + SignUp
	toLogin: () => '/login',
	toSignUp: () => '/signup',
	toOwnerSignUp: () => '/ownerSignUp',
	//Buddy Routes
	toBuddyDashboard: () => '/buddyDashboard',
	toBuddySearch: () => '/buddySearch',
	toBuddyAccount: () => '/buddyProfile',
	//Owner Routes
	toOwnerDashboard: () => '/ownerDashboard',
	toEditGym: () => '/editGym',
	toOwnerAccount: () => '/ownerProfile',
};

export default Routes;
