
@isTest
private class SupplierControllerTest {

    @isTest
    static void testGetSuppliers() {
        Account account = new Account(
            Name = 'Test Account'
        );
        insert account;

        Supplier__c supplier = new Supplier__c(
            Name = 'Test Supplier',
            Account__c = account.Id,
            Payment_Status__c = 'Pending'
        );
        insert supplier;

        Test.startTest();
        List<Supplier__c> result = SupplierController.getSuppliers();
        Test.stopTest();

        System.assertEquals(
            1,
            result.size(),
            'Deve devolver um fornecedor.'
        );
        System.assertEquals('Test Supplier', result[0].Name);
        System.assertEquals('Test Account', result[0].Account__r.Name);
        System.assertEquals('Pending', result[0].Payment_Status__c);
        System.assertEquals(supplier.Id, result[0].Id);
    }

    @isTest
    static void testGetSuppliersWhenNoRecords() {
        Test.startTest();
        List<Supplier__c> result = SupplierController.getSuppliers();
        Test.stopTest();

        System.assertEquals(
            0,
            result.size(),
            'A lista deve estar vazia quando não existem fornecedores.'
        );
    }
}
