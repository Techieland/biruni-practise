# Biruni practise
**GWS Biruni Web training notes**

[*Lecture content*](https://docs.google.com/document/d/1En1d_RXbODt2RKQlCpf2Fdy73Q-VipSbvaB-R7s8ijA/edit?usp=sharing)
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

# Lesson 3

### app-socket.js

##### This factory handles WebSocket communication and manages real-time updates for a web application.

Let's break it down:

- **Dependencies:** *\$http, \$rootScope, bRoutes, bConfig, bConstants.*
These are used for making HTTP requests, managing the application's root scope, and accessing configuration constants.

- **Initialization:** The factory defines two objects, `si` and `ws`.
  - `si` - is an abbreviation for "**system information**". It is used as an object to store various pieces of data such as: *filials, projects, notifications, messages*.
  - `ws` - is the WebSocket instance.

- **Helper Functions:**
  - `avatarUrl(sha)` - Generates an avatar URL based on a SHA hash.
  - `formatTime(time)` - Formats a given timestamp into a readable time format.
  - `loadNotifications()` - Makes an HTTP POST request to a route `bRoutes.NOTIFICATIONS` to fetch notifications, and then updates si.notifications.
  - `loadAlerts()` - Makes an HTTP POST request to fetch alerts and uses the $.notify library to display them as notifications.
  - **`open(__si)`** - Opens a WebSocket connection (`wss://smartup.online/broadcast`). It also calls the functions to load notifications, alerts, and messages. It listens for WebSocket events (open, message, close) and performs actions based on the received data.
  - **`close()`** - Closes the WebSocket connection if it exists.

- **Return Object:**
The factory returns an object with `open` and `close` methods, allowing other parts of the AngularJS application to open and close the WebSocket connection.

### app-chatbot.js

**AppChatbot** - is responsible for integrating and running different chatbots in a web application:

- **`runDashlyChatbot()`**
- **`runFreshworks()`**

These functions is responsible for setting up and running the particular chatbots. They include dynamically loading and initializing the chatbot with the provided user and company information.

- **`run()`** - This is the main function exposed by the factory. It takes a data parameter, which is expected to contain information about different chatbots and the user. It iterates through the list of chatbots (`data.chatbots`) and runs the appropriate chatbot based on its type.

### **app-setting.js**

#### **`AppSetting`**
- **`settings`** Object: Contains default settings such as `start_kind`, `init_project`, `init_filial`, and `init_form`.
- **`save(key)`** - Saves a specific setting to either local storage or the server based on whether the application is in debug mode.
- **`prepareMenuForms()`** - Populates the `settings.forms` array, representing menu forms. It creates a hierarchical structure of forms within menus based on the provided filials, menus, and forms.
- **`prepareInitSettings(si)`** - Prepares the initial settings related to projects, filials, and forms. It populates the `settings.projects` and `settings.filials` arrays based on the provided system information (`si`).
- **`saveInitSettings()`** - Called to save the initial settings related to projects, filials, and forms.
- **`set(new_settings)`** - Part of the returned object, it allows setting multiple properties of the `settings` object at once.
- **Returned Object:** The factory returns an object with properties and methods: `settings` (the settings object), `save` (the save function), `prepareInitSettings` (to initialize settings based on system information), and `set` (to set multiple properties of the settings object at once).
