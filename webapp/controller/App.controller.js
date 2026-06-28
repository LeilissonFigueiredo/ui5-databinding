sap.ui.define([
    "sap/m/library",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/type/Currency"
],(mobileLibrary,Controller, Currency) => {
    "use strict";

    const App = Controller.extend("ui5.databinding.controlle.App", {
        formatMail(sFirstName, sLastName){
            const oBundle  = this.getView()?.getModel("i18n")?.getResourceBundle();
            const sEmail = `${sFirstName}.${sLastName}@example.com`;
            const sSubject = oBundle.getText("mailSubject", [sFirstName]);
            const sBody    = oBundle.getText("mailBody");

            return mobileLibrary.URLHelper.normalizeEmail(sEmail,sSubject,sBody);
        },

        formatStockValue(fUnitPrice, iStockLevel, sCurrCode){
            const oCurrency = new Currency();

            return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");
        },

        onSelectItem(oEvent){
            const oSelectedItem =  oEvent.getSource();
            const oContext = oSelectedItem.getBindingContext("products");
            const sPath = oContext.getPath();
            const oProductDetailPanel = this.byId("pnProductDetailsPanel");
            
            oProductDetailPanel.bindElement({
                "path": sPath,
                "model": "products"
            })

        }

    });

    return App;

})