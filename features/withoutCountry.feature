Feature: Without Country select
  
  Background: 
    Given I go to 'https://catamphetamine.gitlab.io/react-phone-number-input/'

  Scenario: Valid number
    When I enter phone number '1 234 567 890'
    Then code is formatted to '+1234567890'

  Scenario Outline: Invalid number
    When I enter phone number <input>
    Then code is formatted to '<value>'
    Examples:
    |input        |value      |
    |1 234 567 89a| +123456789|
    |1 234 567abc | +1234567  |
    |1abcdea 12   | +112      |