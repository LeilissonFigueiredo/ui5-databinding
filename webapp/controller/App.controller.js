sap.ui.define([
    "sap/m/library",
    "sap/ui/core/mvc/Controller"
],(mobileLibrary,Controller) => {
    "use strict";

    const App = Controller.extend("ui5.databinding.controlle.App", {
        formatMail(sFirstName, sLastName){
            const oBundle  = this.getView()?.getModel("i18n")?.getResourceBundle();
            const sEmail = `${sFirstName}.${sLastName}@example.com`;
            const sSubject = oBundle.getText("mailSubject", [sFirstName]);
            const sBody    = oBundle.getText("mailBody");

            return mobileLibrary.URLHelper.normalizeEmail(sEmail,sSubject,sBody);
        }

    });

    return App;

})