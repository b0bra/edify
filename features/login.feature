Feature: Login
  http://the-internet.herokuapp.com/login

  Background:
    Given I go to 'http://the-internet.herokuapp.com/login'

    Scenario: Login Success
      When I enter credentials
      |tomsmith|SuperSecretPassword!|
      Then success message appears

    Scenario Outline: Login Failure
      When I enter credentials
        |<username>|<password>|
      Then error message appears
      Examples:
      |username|password|
      |testUser|failPass|
      |TOMSMITH|SUPERSECRETPASSWORD!|

    Scenario: Logout Success
      And I enter credentials
        |tomsmith|SuperSecretPassword!|
      And success message appears
      When I log out
      Then login page is displayed