Feature: Add and Remove Element
  http://the-internet.herokuapp.com/add_remove_elements/

  Background:
    Given I go to 'http://the-internet.herokuapp.com/add_remove_elements/'

  Scenario: Add single Element
    When I Add Element
    Then 1 Delete Element is displayed

  Scenario: Delete Element
    And I Add Element
    And I Add Element
    And I Add Element
    When I click Delete Element
    Then 2 Delete Element is displayed