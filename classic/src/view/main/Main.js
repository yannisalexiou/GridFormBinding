/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GridFormBinding.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'GridFormBinding.view.main.MainController',
        'GridFormBinding.view.main.MainModel',
        'GridFormBinding.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Old School',
        iconCls: 'fa-times',
        bind: {
            html: '<H1>Hardcoded text in View</H1>'
        }
    }, {
        title: 'New Way',
        iconCls: 'fa-check',
        bind: {
            html: '{sampleText}'
        }
    }, {
        title: 'Grid With Form',
        iconCls: 'fa-calendar-o',

        items: [{
            xtype: 'oneGridWithFormView'
        }]
    }, {
        title: 'Two Grids, Form & Formula',
        iconCls: 'fa-calendar',

        items: [{
            xtype: 'twoGridsWithForm'
        }]
    }]
});
