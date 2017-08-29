/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'GridFormBinding.Application',

    name: 'GridFormBinding',

    requires: [
        // This will automatically load all classes in the GridFormBinding namespace
        // so that application classes do not need to require each other.
        'GridFormBinding.*'
    ],

    // The name of the initial view to create.
    mainView: 'GridFormBinding.view.main.Main'
});
