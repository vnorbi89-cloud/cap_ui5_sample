sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("main.cap.service.ui.ui5.controller.View1", {
        onInit() {
        },
        async onCheckConnection1(oEvent) {
           MessageToast.show("Check Connection 1 not ok");

        },
        async onCheckConnection2(oEvent) {
           try{ 

                const oModel = this.getView().getModel(); // OData V4 model

                const oAction = oModel.bindContext("/checkConnection(...)");

                oAction.setParameter("sample", "123213");

                const oResult = await oAction.execute();

                const data = oAction.getBoundContext().getObject();

                console.log("Response:", data);
                MessageToast.show(data.value);
            } catch (err) {
                console.error("Error:", err);
                MessageToast.show(err);
            }

        }

    });
});