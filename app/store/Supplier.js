/**
 * Created by trainee on 13/7/2017.
 */
Ext.define('GridFormBinding.store.Supplier', {
    extend: 'Ext.data.Store',
    alias: 'store.supplier',
    storeId: 'supplier',

    requires : [
        'GridFormBinding.model.SupplierModel'
    ],

    model: 'GridFormBinding.model.SupplierModel',
    autoLoad: true,
    pageSize: 5,
    proxy: {
        autoSave: true,
        autoSync:true,
        type: 'rest',
        //url: 'https://api.myjson.com/bins/mw4pn',
        url: '/app/data/SuppliersWithItems.json',
        //url: 'https://api.myjson.com/bins/15rsaz',
        reader: {
            type: 'json',
            rootProperty: 'suppliers'
        },
        success: function(response){
            console.log(response.responseText);
            console.log("Test");
        }
    },

    listeners: {

        update: function(store, record , operation , modifiedFieldNames) {
            if (!modifiedFieldNames) {
                return;
            }

            // Ensure that select field is being set to a value, not the entire record
            var modField = modifiedFieldNames.toString(),
                mod = record.get(modField);

            if (mod && mod.isModel) {
                record.set(modField, mod.get('text'));
            }
        }
    }
});