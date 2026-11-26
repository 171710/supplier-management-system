
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getSuppliers from '@salesforce/apex/SupplierController.getSuppliers';


const COLUMNS = [
    { label: 'Fornecedor', fieldName: 'Name', type: 'text' },
    { label: 'Conta Associada', fieldName: 'accountName', type: 'text' },
    {
        label: 'Estado de Pagamento',
        fieldName: 'Payment_Status__c',
        type: 'text'
    }
];

export default class SupplierList extends LightningElement {
    columns = COLUMNS;

    showNewSupplierForm = false;

    allSuppliers = [];
    suppliers = [];

    isLoading = true;
    errorMessage;

    searchTerm = '';
    selectedStatus = 'All';

    statusOptions = [
        { label: 'Todos os estados', value: 'All' },
        { label: 'Pending', value: 'Pending' },
        { label: 'Paid', value: 'Paid' },
        { label: 'Overdue', value: 'Overdue' }
    ];

    connectedCallback() {
        this.loadSuppliers();
    }

    async loadSuppliers() {
        this.isLoading = true;
        this.errorMessage = undefined;

        try {
            const data = await getSuppliers();

            this.allSuppliers = data.map(supplier => ({
                ...supplier,
                accountName: supplier.Account__r?.Name || 'Sem conta associada'
            }));

            this.applyFilters();

        } catch (error) {
            console.error('Erro ao carregar fornecedores:', error);

            this.errorMessage =
                'Não foi possível carregar os fornecedores.';
        } finally {
            this.isLoading = false;
        }
    }

    handleSearch(event) {
        this.searchTerm = event.target.value;
        this.applyFilters();
    }

    handleStatusChange(event) {
        this.selectedStatus = event.detail.value;
        this.applyFilters();
    }

    applyFilters() {
        const search = this.searchTerm.trim().toLowerCase();
        const status = this.selectedStatus.trim().toLowerCase();

        this.suppliers = this.allSuppliers.filter(supplier => {
            const name = (supplier.Name || '').toLowerCase();
            const account = (supplier.accountName || '').toLowerCase();
            const payment = String(
                supplier.Payment_Status__c || ''
            ).trim().toLowerCase();

            const matchesSearch =
                name.includes(search) || account.includes(search);

            const matchesStatus =
                status === 'all' || payment === status;

            return matchesSearch && matchesStatus;
        });
    }

    async handleRefresh() {
        await this.loadSuppliers();
    }
    handleNewSupplier() {
        this.showNewSupplierForm = true;
    }

    handleCancelNewSupplier() {
        this.showNewSupplierForm = false;
    }

    handleSupplierSuccess() {
        this.showNewSupplierForm = false;

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Sucesso',
                message: 'Fornecedor criado com sucesso!',
                variant: 'success'
            })
        );

        this.loadSuppliers();
    }

    handleSupplierError(event) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Erro ao criar fornecedor',
                message: event.detail.message,
                variant: 'error'
            })
        );
    }

    get hasSuppliers() {
        return this.suppliers.length > 0;
    }

    get isEmpty() {
        return !this.isLoading &&
            !this.errorMessage &&
            this.suppliers.length === 0;
    }
}

