
public with sharing class SupplierController {

    @AuraEnabled
    public static List<Supplier__c> getSuppliers() {

        List<Supplier__c> suppliers = [
            SELECT Id, Name, Account__r.Name, Payment_Status__c
            FROM Supplier__c
            WITH USER_MODE
            ORDER BY Name ASC
        ];

        return suppliers;
    }
