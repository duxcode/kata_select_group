'use strict';

describe('Controller: select group', function() {

    beforeEach(module('Group'));

    var controller;
    var scope;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('group', {
            $scope: scope
        });
    }));

    describe('On instance', function() {
        it('should set "controller_loaded" variable in scope', function() {
            expect(scope.controller_loaded).toContain('loaded');
        });
    });

    describe('On instance', function() {
        it('scope function multiplication', function() {
            var res = scope.multiplication([2, 2])
            expect(res).toBe(4);

            var res = scope.multiplication([2, 2, 2, 2])
            expect(res).toBe(16);
        });
    });

    describe('On instance', function() {
        it('scope function Beach', function() {
            // var res = scope.beach([
            //     ['1009', '2011'],
            //     ['1017', '2011']
            // ])

            // expect(res).toEqual(['2011']);

            // var res = scope.beach([
            //     ['1009', '2000'],
            //     ['1009', '2001'],
            //     ['1002', '2002'],
            //     ['1003', '2002']
            // ])

            expect(res).toEqual(['1009', '2002']);

            var res = scope.beach([
                ['1007', '2000'],
                ['1000', '2000'],
                ['1000', '2002'],
                ['1006', '2002']
            ])

            expect(res).toEqual(['2000', '2002']);
        });
    });

    describe('when going to /group', function() {

        var route, location, rootScope, httpBackend;

        beforeEach(inject(function($route, $location, $rootScope, $httpBackend) {
            route = $route;
            location = $location;
            rootScope = $rootScope;
            httpBackend = $httpBackend;

            httpBackend.when('GET', 'scripts/group/views/group.html').respond('<div></div>');
        }));

        afterEach(function() {
            httpBackend.verifyNoOutstandingExpectation();
            httpBackend.verifyNoOutstandingRequest();
        });

        it('should use minesweeper.html and controller', function() {
            expect(route.current).toBeUndefined();

            location.path('/group');

            httpBackend.flush();

            expect(route.current.templateUrl).toBe('scripts/group/views/group.html');
            expect(route.current.controller).toBe('group');
        });
    });

});