sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/m/MessageToast", "sap/m/MessageBox"], (Controller, JSONModel, MessageToast, MessageBox) => {
  "use strict";

  return Controller.extend("main.cap.service.ui.ui5.controller.View1", {
    onInit() {
      const params = new URLSearchParams(window.location.search);
      this.bp = params.get("bp");
      console.log("Business Partner from URL:", this.bp);
      // ✅ View model (instead of DOM manipulation)
      const oViewModel = new JSONModel({
        BankAccounts: [],
        selected: null,
        message: ""
      });
      this.getView().setModel(oViewModel, "viewModel");

      //    this.getView().attachEventOnce("modelContextChange", this.checkInit.bind(this));

      /*    const fnCheck = () => {
              const oModel = this.getView().getModel();
              if (oModel) {
                  this.checkInit();
              } else {
                  setTimeout(fnCheck, 50);
              }
          };
          fnCheck();*/
    },
    async onShowFact() {
      try {
        const oModel = this.getView().getModel();
        const oAction = oModel.bindContext("/testFact(...)");
        await oAction.execute();
        const data = oAction.getBoundContext().getObject();
        const fact = data.value || "No fact available";
        console.log("Random Fact:", fact);
        MessageBox.information(fact, {
          title: "Facts!!!",
          actions: [MessageBox.Action.OK]
        });
      } catch (err) {
        console.error("Error fetching fact:", err);
        MessageToast.show("Error fetching fact: " + err.message);
      }
    },
    async checkInit(oEvent) {
      try {
        const oModel = this.getView().getModel(); // OData V4 model

        const oAction = oModel.bindContext("/checkConnection(...)");
        oAction.setParameter("sample1", "first param");
        oAction.setParameter("sample2", "second param");
        await oAction.execute();
        const data = oAction.getBoundContext().getObject();
        const results = data.value || [];
        console.log("Init task successful:", data);
        MessageToast.show(results);
      } catch (err) {
        console.error("Error:", err);
        MessageToast.show(err);
      }
    },
    async onCheckConnection1(oEvent) {
      try {
        const uid = this.byId("inputSample").getValue();
        ;
        const oModel = this.getView().getModel(); // OData V4 model

        const oAction = oModel.bindContext("/checkC4CConnection(...)");
        oAction.setParameter("caseuuid", uid);
        await oAction.execute();
        const data = oAction.getBoundContext().getObject();
        const results = data.value || [];
        const c4 = `ID: ${data.displayId}\nSubject: ${data.subject}\nOrigin: ${data.origin}\nPriority: ${data.priority}`;
        MessageBox.information(c4, {
          title: "C4C info",
          actions: [MessageBox.Action.OK]
        });
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
        console.error("Error:", err.message);
        MessageToast.show(err.message);
      }
    }
  });
});
//# sourceMappingURL=View1-dbg.controller.js.map
