@isTest
private class SupplierControllerTest {

    @isTest
    static void testGetSuppliers() {

        // Criar uma conta de teste
        Account account = new Account(
            Name = 'Test Account'
        );
        insert account;

        // Criar um fornecedor associado à conta
        Supplier__c supplier = new Supplier__c(
            Name = 'Test Supplier',
            Account__c = account.Id,
            Payment_Status__c = 'Pending'
        );
        insert supplier;

        // Executar o método que queremos testar
        Test.startTest();
        List<Supplier__c> result = SupplierController.getSuppliers();
        Test.stopTest();

        // Verificar os resultados
        System.assertEquals(1, result.size());
        System.assertEquals('Test Supplier', result[0].Name);
        System.assertEquals('Test Account', result[0].Account__r.Name);
        System.assertEquals('Pending', result[0].Payment_Status__c);
    }
}