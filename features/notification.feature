Feature: Notification

  Background:
    Given I go to 'http://the-internet.herokuapp.com/notification_message_rendered'

    Scenario: Load New Message
      When I load new message
      Then New message is displayed
      When I load new message
      Then New message is displayed