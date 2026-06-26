sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/BindingMode"
],(UiComponent,BindingMode)  => {
    "use strict";

    return UiComponent.extend("ui5.databinding.Component", {
        metedata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },

        init(){
            UiComponent.prototype.init.apply(this, arguments);

            this.getModel()?.setDefaultBindingMode(BindingMode.OneWay);
        }

    })

})