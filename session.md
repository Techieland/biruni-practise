```javascript
document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    // The page is now hidden
    console.log("Page is hidden");
  } else {
    // The page is now visible
    console.log("Page is visible");
  }
});
```

<!-- lock screen -->
<!-- BroadcastEvent API -->


variables initialization
BroadcastChannel setup

bConfig.sessionOutFn(sessionOut);
    sessionOut()
        logout()
        notifySession()
bConfig.subscriptionEndFn(subscriptionEnd);
    subscriptionEnd()
bConfig.sessionConflictsFn(sessionConflicts);
    sessionConflicts()
bConfig.onLocationChange(tryLocationChange);
    tryLocationChange()
        forceLocationChange()
        sessionOut()
onInit()
    onSessionDone()
        avatarUrl()
        evalMenus()
        setSubscriptionInfo()
        setProjectConfig()
    onSessionFail()
    logout()

return {
  si: si,
  sessionDone: sessionDone.promise,
  introPage: introPage,
  registerSetFilialObserver: registerSetFilialObserver,
  setFilial: setFilial,
  openSession: openSession,
  logout: logout,
  logoutAndForget: logoutAndForget,
  lockScreen: lockScreen,
  sessionStay: sessionStay
}





```json
{
    "user": {
        "user_id": "101",
        "name": "Admin",
        "password_change_required": "",
        "photo_sha": "",
        "login": "admin@head",
        "prefix": "A"
    },
    "is_admin": "Y",
    "lang_code": "ru",
    "company_name": "Head #0",
    "company_code": "head",
    "country_code": "",
    "biruni_langs": {
        "sh_add_task_current_form": "Добавить задачу к текущей форме",
        "sh_custom_translate": "Пользовательский перевод"
    },
    "projects": [
        {
            "102": [
                [
                    "22"
                ],
                [
                    "/core/mqz/dv_quiz_set_list"
                ],
                [
                    "Опросники двойных визитов"
                ],
                [
                    "/core/mqz/dv_quiz+add",
                    ""
                ],
                [
                    "Вопрос двойного визита (создание)",
                    ""
                ]
            ],
            "hash": "01",
            "code": "anor",
            "name": "Anor",
            "intro_form": "/anor/intro/dashboard",
            "subscription_end_form": "",
            "subscription_infos": {
                "has_warning": "N"
            },
            "filials": [
                [
                    "102",
                    "Администрирование"
                ]
            ],
            "menus": [
                [
                    "1",
                    "",
                    "Справочники",
                    "1"
                ]
            ]
        }
    ],
    "settings": {
        "start_kind": "",
        "init_project": "",
        "init_filial": "",
        "init_form": ""
    },
    "warning_message": "",
    "chatbot_info": [
        {
            "chatbot_type": "freshchat",
            "script_src": "//fw-cdn.com/11100416/3829152.js",
            "external_id": "1C1C8EF0B9BE784736C1E65A1EE11F17F9185B452AADACBC4840679570E7DFBDA4DB943CCB7E7D9EA52B34052C9D8370813D2A7BD367E3D571365F583C931EFE",
            "restore_id": "6c7f28f1-a9bc-48d3-bff6-b3232d250641",
            "name": "Admin"
        }
    ]
}
```

---

### AppSession Documentation

#### Overview:

`AppSession` is an AngularJS factory responsible for managing session-related functionalities, such as user authentication, session handling, and various utility functions.

#### Dependencies:

- `$rootScope`: AngularJS root scope service.
- `$http`: AngularJS HTTP service for making AJAX requests.
- `$location`: AngularJS service for URL manipulation.
- `$q`: AngularJS service for handling promises.
- `$timeout`: AngularJS service for deferred execution of functions.
- `AppSocket`: Custom service for managing socket communication.
- `AppSessionTimer`: Custom service for managing session timeout.
- `AppSetting`: Custom service for handling application settings.
- `AppChatbot`: Custom service for handling chatbot functionality.
- `bConfig`: Custom service for configuration settings.
- `bFrame`: Custom service for managing UI frames.
- `bForms`: Custom service for handling form-related functionality.
- `bRoutes`: Custom service for managing application routes.
- `bStorage`: Custom service for handling local storage.
- `bSessionStorage`: Custom service for handling session storage.

#### Functions:

1. **registerSetFilialObserver(callback):**
   - Description: Registers a callback function to be notified when the filial is set.
   - Parameters:
     - `callback`: The function to be called when the filial is set.

2. **notifySetFilialObservers(data):**
   - Description: Notifies all registered callbacks with the provided data when the filial is set.
   - Parameters:
     - `data`: Data to be passed to the registered callbacks.

3. **setFilial(project_hash, filial_id):**
   - Description: Sets the current project and filial, updating relevant configurations and notifying observers.
   - Parameters:
     - `project_hash`: The hash code of the project.
     - `filial_id`: The ID of the filial.

4. **openSession(notify):**
   - Description: Opens a session, configuring headers, handling UI changes, and notifying if required.
   - Parameters:
     - `notify`: Flag to indicate whether to notify session opening.

5. **evalForms(menus, forms, prefix):**
   - Description: Evaluates and prepares forms based on menus and prefixes.
   - Parameters:
     - `menus`: List of menus.
     - `forms`: List of forms.
     - `prefix`: URL prefix.

6. **setProjectConfig(project):**
   - Description: Sets the configuration for a specific project, fetching from storage or making an HTTP request.
   - Parameters:
     - `project`: The project for which configuration is to be set.

7. **getInitProject():**
   - Description: Gets the initial project based on application settings.
   - Returns: The initial project.

8. **getInitFilial():**
   - Description: Gets the initial filial based on application settings.
   - Returns: The initial filial.

9. **saveSessionUrl():**
   - Description: Saves the current session URL to session storage.

10. **onSessionFail(error):**
    - Description: Handles session failure, including saving session URL and initiating logout if necessary.
    - Parameters:
      - `error`: The error object.

11. **onInit():**
    - Description: Initializes the session, handling URL parsing, session promises, and appropriate actions.

12. **lockScreen():**
    - Description: Locks the session screen, initiating session out if needed.

13. **sessionOut(notify):**
    - Description: Ends the session, notifying if required, and handling associated tasks.
    - Parameters:
      - `notify`: Flag to indicate whether to notify session locking.

14. **sessionStay():**
    - Description: Notifies the session to stay active.

15. **subscriptionEnd():**
    - Description: Opens a replacement for the subscription end form.

16. **sessionConflicts():**
    - Description: Opens a replacement for the session conflicts form.

17. **logout():**
    - Description: Logs out the user, closing the socket and initiating a redirect to the login page.

18. **logoutAndForget():**
    - Description: Logs out the user and forgets the session.

19. **introPage(pr_code):**
    - Description: Gets the intro page based on project code or defaults to the dashboard.

20. **getSessionUrl():**
    - Description: Gets and removes the saved session URL from session storage.
    - Returns: The session URL or an empty string.

21. **redirectToInit():**
    - Description: Redirects to the initial URL based on settings or intro page.

22. **normalizeLocation(parsed_url):**
    - Description: Normalizes the location based on parsed URL parameters.

23. **redirectPasswordChange(project_hash, filial_id):**
    - Description: Redirects to the password change page based on project hash and filial ID.

24. **forceLocationChange():**
    - Description: Forces a change in location based on the parsed URL type.

25. **tryLocationChange():**
    - Description: Attempts to change the location, handling exceptions and initiating necessary actions.

#### Variables:

- `si`: An object holding user, filial, project, and other session-related information.
- `settings`: An object holding application settings.
- `broadcast`: An instance of `BroadcastChannel` for handling session-related broadcasts.
- `sessionDone`: A deferred promise indicating the completion of session-related actions.
- `sessionOpened`: A boolean flag indicating whether the session is currently open.
- `timer`: An instance of `AppSessionTimer` for managing session timeout.
- `setFilialOnce`: A reference to the `setFilial` function (using `_.once`).

Note: This documentation provides an overview of the `AppSession` factory, its functions, dependencies, and variables. Specific implementation details of custom services like `AppSocket`, `AppSessionTimer`, and others are not included in this documentation. If more detailed information on these services is needed, their individual documentation should be referenced.