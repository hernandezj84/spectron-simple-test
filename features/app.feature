Feature: App
    Scenario: As an user I can open the app and see the UI
        Given App has been opened
        When Title contains "Books"
        Then Grab the button content