Ext.define('GridFormBinding.view.main.supplierDatabase', {
    extend: 'Ext.panel.Panel',
    xtype: 'oneGridWithFormView',

    items: [{
        xtype: 'container',

        //Container Style
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'begin ',
        },

        items: [{
            xtype: 'panel',

            //Panel Style
            width: '100%',
            autoScroll: true,
            layout: {
                type: 'vbox',
                align: 'begin'
            },

            items: [{
                xtype: 'panel',

                title: 'Panel Records',

                //Panel Style
                width: '100%',
                autoScroll: true,
                layout: {
                    type: 'hbox',
                    align: 'begin'
                },

                items: [{
                    xtype: 'grid',
                    reference: 'mainGrid',

                    title: 'List of Suppliers',

                    //Grid Style
                    width: '50%',
                    height: 800,
                    margin: '5 4 5 0',
                    autoScroll: true,

                    store: {
                        type: 'supplier',
                        autoLoad: {start: 0, limit: 5},
                        sorters: [ 'firstName', 'lastName', 'phoneNumber'],
                        grouper: 'firstName'
                    },
                    columns: [{
                        text: 'First Name',
                        dataIndex: 'firstName',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        text: 'Last Name',
                        dataIndex: 'lastName',
                        flex: 1,
                        editor: 'textfield'
                    }, {
                        text: 'Phone Number',
                        dataIndex: 'phoneNumber',
                        flex: 1,
                        editor: {
                            xtype: 'textfield',
                            allowBlank: false
                        }
                    }]

                }, {
                    xtype: 'form',
                    reference: 'moreInfoReference',

                    title: 'More Info ',
                    bind : {
                        title: '{mainGrid.selection.firstName} {mainGrid.selection.lastName}, {mainGrid.selection.debt}€'
                    },

                    //Form Style
                    width: '50%',
                    height: 800,
                    margin: '5 0 5 5',
                    border: '1px solid #DCDCDC',
                    autoscroll: true,

                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'First Name',
                        bind: '{mainGrid.selection.firstName}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Last Name',
                        bind: '{mainGrid.selection.lastName}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Office Location',
                        bind: '{mainGrid.selection.officeLocation}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Phone Number',
                        bind: '{mainGrid.selection.phoneNumber}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Email',
                        bind: '{mainGrid.selection.email}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Latitude',
                        bind: '{mainGrid.selection.latitude}',
                        allowBlank: true
                    }, {
                        fieldLabel: 'Longitude',
                        bind: '{mainGrid.selection.longitude}',
                        allowBlank: true
                    }],
                }
                ]

            }]
        }]
    }]

});
