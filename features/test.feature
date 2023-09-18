Feature: Feature file Name
  Scenario: Checkbox component is clickable

    Given I navigate to "https://www.primefaces.org/primereact-v5/#/datatable/selection" page
    When I select the checkbox with "Blue Band" name
    Then Validate that the checkbox with "Blue Band" name was checked