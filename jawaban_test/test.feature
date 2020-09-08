Feature: eligible user can order using voucher

    # ensure voucher feature work

    Scenario: As eligible User I should be able to order using voucher
    Given I Log in using eligible user
    When I select sku
    And I checkout
    And I choose JNE courier
    And I select 'metode pembayaran' using Alfamart
    And tap 'Bayar'
    Then direct to detail order page
    And shown status tagihan 'Menuggu pembayaran'
    When I pay
    Then status tagihan change to 'Dibayar'
    Then Sku sent to me
    And status change to 'selesai'