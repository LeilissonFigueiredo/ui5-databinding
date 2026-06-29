sap.ui.define([
    "sap/m/library",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/type/Currency",
    "sap/m/ObjectAttribute"
],(mobileLibrary,Controller, Currency, ObjectAttribute ) => {
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

        },
        
        productListFactory(sId, oContext){
            let oUIControl;

            //Decide based on the data which dependent to clone
            if (oContext.getProperty("UnitsInStock") === 0 && oContext.getProperty("Discontinued")){
                // The item is discontinued, so use a StandardListItem
                oUIControl = this.byId("sliProductSimple").clone(sId);
            }else{
                oUIControl = this.byId("sliProductExtended").clone(sId);
            
                if (oContext.getProperty("UnitsInStock") < 1 ){
                    oUIControl.addAttribute(new ObjectAttribute({
                        "text": "{i18n>outOfStock}"
                    }))
                }
            }

            return oUIControl;
        }

    });

    return App;

})