Ext.define('GridFormBinding.view.main.compareSuppliersView', {
    extend: 'Ext.panel.Panel',
    xtype: 'twoGridsWithForm',

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

                title: 'Primary Store',

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
                    height: 350,
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
                    reference: 'mainGrid',

                    title: 'More Info ',

                    //Grid Style
                    width: '50%',
                    height: 350,
                    margin: '5 0 5 5',
                    border: '1px solid #DCDCDC',
                    autoscroll: true,

                    bind : {
                        title: '{fullName}, {mainGridRecord.debt}€'
                    },

                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'First Name',
                        bind: '{mainGridRecord.firstName}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Last Name',
                        bind: '{mainGridRecord.lastName}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Office Location',
                        bind: '{mainGridRecord.officeLocation}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Phone Number',
                        bind: '{mainGridRecord.phoneNumber}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Email',
                        bind: '{mainGridRecord.email}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Latitude',
                        bind: '{mainGridRecord.latitude}',
                        allowBlank: true
                    }, {
                        fieldLabel: 'Longitude',
                        bind: '{mainGridRecord.longitude}',
                        allowBlank: true
                    }],
                }
                ]

            }, {
                xtype: 'panel',

                //Panel Style
                width: '100%',
                autoScroll: true,
                title: 'Chained Store',
                layout: {
                    type: 'hbox',
                    align: 'begin'
                },

                items: [{
                    xtype: 'grid',
                    reference: 'secondaryGrid',

                    width: '50%',
                    height: 350,
                    margin: '5 4 5 0',

                    title: 'List of Suppliers',
                    autoScroll: true,

                    store: {
                        type: 'supplierChainedStore',
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
                    } ],

                    selModel: 'rowmodel',
                    plugins: [{
                        ptype: 'rowediting',
                        clicksToEdit: 2
                    }],

                }, {
                    xtype: 'form',
                    reference: 'moreInfoReference',

                    title: 'More Info ',
                    bind : {
                        title: '{secondGridRecord.firstName} {secondGridRecord.lastName}, {secondGridRecord.debt}€'
                    },

                    //Form Style
                    width: '50%',
                    height: 350,
                    margin: '5 0 5 5',
                    border: '1px solid #DCDCDC',
                    autoscroll: true,

                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'First Name',
                        bind: '{secondGridRecord.firstName}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Last Name',
                        bind: '{secondGridRecord.lastName}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Office Location',
                        bind: '{secondGridRecord.officeLocation}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Phone Number',
                        bind: '{secondGridRecord.phoneNumber}',
                        allowBlank: false
                    }, {
                        fieldLabel: 'Email',
                        bind: '{secondGridRecord.email}',
                        allowBlank: false
                    },{
                        fieldLabel: 'Latitude',
                        bind: '{secondGridRecord.latitude}',
                        allowBlank: true
                    }, {
                        fieldLabel: 'Longitude',
                        bind: '{secondGridRecord.longitude}',
                        allowBlank: true
                    }],
                }
                ]

            }]
        }]
    }]

});
