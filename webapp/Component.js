sap.ui.define([
    "sap/ui/core/UIComponent"
],(UiComponent)  => {
    "use strict";

    return UiComponent.extend("ui5.databinding.Component", {
        metedata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        }

    })

})