var ArcViews = require('../arc/views/');
var TracingViews = require('../tracing/views/');
var ProcessManagerViews = require('../process-manager/views/');
var EC = protractor.ExpectedConditions;

xdescribe('tracing-interactions', function () {
	beforeEach(function() {
		var loginView = new ArcViews.LoginView();
		var landingView = new ArcViews.LandingView();

		loginView.loginToLandingView();
		landingView.openTracingView();
	});

	afterEach(function() {
		var headerView = new ArcViews.HeaderView();

		headerView.logout();
	});

	it('should login and navigate to process manager,' +
		'add a valid pm host,', function () {
		var tracingHomeView =
			new TracingViews.TracingHomeView();
		var processManagerHomeView =
			new ProcessManagerViews.ProcessManagerHomeView();

		tracingHomeView.acceptErrorNotice();

		expect(EC.visibilityOf(processManagerHomeView.componentIdentifier));
	});
});