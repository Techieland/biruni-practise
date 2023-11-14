# Biruni practise
**GWS Biruni Web training notes**

<!-- [*Lecture slides*](https://docs.google.com/presentation/d/1JonZ0fger0syAd7FftvJevrAO8LUyDyGFbudgi0xGTo/edit?usp=sharing) -->

# Lesson 1
### angular module
- An AngularJS module defines an application.
- The module is a container for the different parts of an application.
- The module is a container for the application controllers.
- Controllers always belong to a module.

```html
<div ng-app="myApp"></div>
<script>
  var app = angular.module("myApp", []);
</script>
```

### bootstrap (the initial loading)
```html
<div ng-app="myApp">
[..]
</div>
```
this is equal to
```html
<script>
  angular.bootstrap(document.documentElement, ['app']);
</script>
```

### controller
- AngularJS applications are controlled by controllers.
- The ng-controller directive defines the application controller.
- `$scope` is the application object

```html
<div ng-app="myApp" ng-controller="myCtrl"></div>
<script>
  var app = angular.module("myApp", []);
  app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
  });
</script>
```

### config
- configures modules (module API)

### factories
- factory returns predefined object, or primitive type.
- factory is injectible with different components: controller, factory, service, filter, or directive.

```javascript
app.factory('factoryName', function() {
  [..]
});
```

### directives
- AngularJS lets you extend HTML with new attributes called Directives.
- AngularJS has a set of built-in directives which offers functionality to your applications.
- AngularJS also lets you define your own directives.

**You can invoke a directive by using:**
- (E)lement name `<b-input>`
- (A)ttribute `<div b-number></div>`
- (C)lass `<div class="b-input"></div>`
- Co(m)ment `<!-- b-input -->`

```javascript
app.directive("customDirective", function() {
  return {
    restrict : "EA",
    template : "<h1>Made by a directive!</h1>"
    // templateUrl: function(elem, attr) { return 'customer-' + attr.type + '.html'; },
    // templateUrl: 'my-customer.html',
    // scope: { customerInfo: '=info' },
    // link: function
  };

});
```
**link function incoming params**
- **scope** - is an AngularJS scope object.
- **element** - is the jqLite-wrapped element that this directive matches.
- **attrs** - is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.
- **controller** - is the directive's required controller instance(s) or its own controller (if any). The exact value depends on the directive's require property.
- **transcludeFn** - is a transclude linking function pre-bound to the correct transclusion scope.

### filter (pipe)
```html
<p>The name is {{ amount | currency: curr }}</p>
```

- **currency** - Format a number to a currency format.
- **date** - Format a date to a specified format.
- **filter** - Select a subset of items from an array.
- **json** - Format an object to a JSON string.
- **limitTo** - Limits an array/string, into a specified number of elements/characters.
- **lowercase** - Format a string to lower case.
- **number** - Format a number to a string.
- **orderBy** - Orders an array by an expression.
- **uppercase** - Format a string to upper case.

# Lesson 2

### app-onload.js
- Setting http request header lang_code
- Removing menu for mobile app
- Setting session URI into global variable
- Scrolling animation before leaving application

### app-module.js
- Initializing `app` module
- Dependency injection of other modules


### Hotkeys
- **`factories/b-hotkey.js`**
  Returns hotkey class instance.
  Can have multiple mod-keys with one letter-key in a combination.
  It stores callback for running on hotkey pressed.
- **`directives/b-hotkey.js`**
  Using `b-hotkey="save"` attribute to bind hotkey into tag click event.
  Also, `b-hotkey="alt+q"` you can define your own hotkey combination.
- **`app-hotkeys.js`**
  `key_set_getters` stores all hotkeys, and sets eventlistener for keydown/keyup event.


### websocket
- Communication protocol for real-time, bidirectional data exchange.
- Enables persistent connections between clients and servers.
- Ideal for low-latency applications like chat and live updates.
- Operates on a lightweight architecture for efficiency in real-time web applications.

<!-- ### app-socket.js -->
