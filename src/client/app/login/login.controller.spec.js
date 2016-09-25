/* jshint -W117, -W030 */
describe('app.login', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.login');
        bard.inject('$controller', '$rootScope', '$q');
    });

    beforeEach(function() {
        controller = $controller('Login');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Login controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        //describe('after activate', function() {
        //    it('should have title of Login' , function() {
        //        expect(controller.title).to.equal('Login');
        //    });
        //
        //    it('should have errorMode set to true' , function() {
        //        expect(controller.errorMode).to.equal(true);
        //    });
        //});
    });
});

