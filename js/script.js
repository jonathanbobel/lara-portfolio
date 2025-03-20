// script.js

// also include ngRoute for all our routing needs
var luluApp = angular.module("luluApp", ["ngRoute", "ngAnimate"]);

// configure our routes
luluApp.config(function ($routeProvider, $locationProvider) {
  $routeProvider

    // route for the home page
    .when("/", {
      templateUrl: "pages/home.html",
      controller: "mainController",
    })

    // route for the about page
    .when("/about", {
      templateUrl: "pages/about.html",
      controller: "aboutController",
    })

    // route for the donations page
    .when("/donations", {
      templateUrl: "pages/donations.html",
      controller: "aboutController",
    })

    // route for the contact page
    .when("/contact", {
      templateUrl: "pages/contact.html",
      controller: "contactController",
    })

    // route for the sub pages
    .when("/portfolio/annual-2019", {
      templateUrl: "pages/portfolio/annual-2019.html",
      controller: "portfolioController",
    })
    .when("/portfolio/antidote", {
      templateUrl: "pages/portfolio/antidote.html",
      controller: "portfolioController",
    })
    .when("/portfolio/conference", {
      templateUrl: "pages/portfolio/conference.html",
      controller: "portfolioController",
    })
    .when("/portfolio/sales", {
      templateUrl: "pages/portfolio/sales.html",
      controller: "portfolioController",
    })
    .when("/portfolio/ucc", {
      templateUrl: "pages/portfolio/ucc.html",
      controller: "portfolioController",
    })
    .when("/portfolio/innovation", {
      templateUrl: "pages/portfolio/innovation.html",
      controller: "portfolioController",
    })
    .when("/portfolio/hyundai", {
      templateUrl: "pages/portfolio/hyundai.html",
      controller: "portfolioController",
    })
    .when("/portfolio/annual", {
      templateUrl: "pages/portfolio/annual.html",
      controller: "portfolioController",
    })
    .when("/portfolio/ymca", {
      templateUrl: "pages/portfolio/ymca.html",
      controller: "portfolioController",
    })
    .when("/portfolio/burr", {
      templateUrl: "pages/portfolio/burr.html",
      controller: "portfolioController",
    })
    .when("/portfolio/novar", {
      templateUrl: "pages/portfolio/novar.html",
      controller: "portfolioController",
    })
    .when("/portfolio/rrcd", {
      templateUrl: "pages/portfolio/rrcd.html",
      controller: "portfolioController",
    })
    .when("/portfolio/annual-2015", {
      templateUrl: "pages/portfolio/annual-2015.html",
      controller: "portfolioController",
    })
    .when("/portfolio/hearing", {
      templateUrl: "pages/portfolio/hearing.html",
      controller: "portfolioController",
    })
    .when("/portfolio/new-building", {
      templateUrl: "pages/portfolio/new-building.html",
      controller: "portfolioController",
    });

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
luluApp.controller("mainController", function ($scope) {
  $scope.pageClass = "main-view";
});

luluApp.controller("aboutController", function ($scope) {
  $scope.pageClass = "about-view";
});

luluApp.controller("contactController", function ($scope) {
  $scope.pageClass = "contact-view";
});

luluApp.controller("portfolioController", function ($scope) {
  $scope.pageClass = "portfolio-view";
});
