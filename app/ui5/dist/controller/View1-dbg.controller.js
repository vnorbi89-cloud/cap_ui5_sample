sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], (Controller, MessageToast) => {
  "use strict";

  return Controller.extend("main.cap.service.ui.ui5.controller.View1", {
    onInit() {},
    async onCheckConnection1(oEvent) {
      try {
        const oModel = this.getView().getModel(); // OData V4 model

        const oAction = oModel.bindContext("/checkC4CConnection(...)");
        oAction.setParameter("caseuuid", "122b8885-4222-11f1-8d3e-8f7d402d68ea");
        await oAction.execute();
        const data = oAction.getBoundContext().getObject();
        const results = data.value || [];
        console.log("Response:", data);
        MessageToast.show(results);
      } catch (err) {
        console.error("Error:", err);
        MessageToast.show(err);
      }
    },
    async onCheckConnection2(oEvent) {
      try {
        const oModel = this.getView().getModel(); // OData V4 model

        const oAction = oModel.bindContext("/checkConnection(...)");
        oAction.setParameter("sample1", "first param");
        oAction.setParameter("sample2", "second param");
        await oAction.execute();
        const data = oAction.getBoundContext().getObject();
        const results = data.value || [];
        console.log("Response:", data);
        MessageToast.show(results);
      } catch (err) {
        console.error("Error:", err);
        MessageToast.show(err);
      }
    }
  });
});
//# sourceMappingURL=View1-dbg.controller.js.map
