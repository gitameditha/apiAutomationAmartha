Feature: eligible user can order using voucher

    # ensure voucher feature work

    Scenario: As eligible User I want to order using voucher
    Given I Log in using eligible user
    When I select sku
    And I checkout
    And I choose JNE courier
    And I select 'metode pembayaran' using Alfamart
    And I input voucher code
    Then voucher redempt
    And shown rebate value
    When tap 'Bayar'
    Then direct to detail order page
    And shown status tagihan 'Menuggu pembayaran'
    When I pay
    Then status tagihan change to 'Dibayar'
    Then Sku sent to me
    And status change to 'selesai'


    Scenario: As User I should not be able to order using voucher if codition not eligible
    Given I Log in using eligible user
    When I select sku
    And I checkout
    And I choose JNE courier
    And I select 'metode pembayaran' using ATM
    And I input voucher code 
    Then voucher not redempt
    

    