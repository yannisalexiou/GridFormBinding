/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('GridFormBinding.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    //About MVVM and Events
    //https://www.sencha.com/forum/showthread.php?284465-Listening-model-changes-from-a-view-model

    data: {
        name: 'GridFormBinding',

        sampleText: '<h1>Text in ViewModel</h1>',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    //formulas can be used to achieve more advanced operations
    formulas : {

        fullName: {
            get: function (get) {
                var ret = get('mainGrid.selection.firstName') || '',
                    last = get('mainGrid.selection.lastName');

                if (last) {
                    ret += ' ' + last;
                }

                return ret;
            },

            // By providing the set method "fullName" is two-way bindable.
            set: function (value) {
                var space = value.indexOf(' '),
                    split = (space < 0) ? value.length : space;

                this.set({
                    firstName: value.substring(0, split),
                    lastName: value.substring(split + 1)
                });
            }
        },

        mainGridRecord: {
            bind: {
                bindTo: '{mainGrid.selection}',
                deep: true
            },
            get: function(record) {
                return record;
            },
            set: function(record) {
                if(!record.isModel) {
                    record = this.get('records').getById(record);
                }
                this.set('currentRecord', record);
            }
        },

        secondGridRecord: {
            bind: {
                bindTo: '{secondaryGrid.selection}',
                deep: true
            },
            get: function(record) {
                return record;
            },
            set: function(record) {
                if(!record.isModel) {
                    record = this.get('records').getById(record);
                }
                this.set('secondGridRecord', record);
            }
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
