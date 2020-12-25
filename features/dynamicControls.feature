Feature: Dynamic Controls
  http://the-internet.herokuapp.com/dynamic_controls

  Background:
    Given I go to 'http://the-internet.herokuapp.com/dynamic_controls'

  Scenario: Remove checkbox
    When I Remove checkbox

  Scenario: Add checkbox
    And I Remove checkbox
    When I Add checkbox

  Scenario: Enable input
    When I click Enable button
    Then Input is enabled

  Scenario: Disable input
    And I click Enable button
    And Input is enabled
    When I click Disable button
    Then Input is disabled