import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace tufa.fioriDemo.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;
	private oScanResultText;

	public onScanSuccess(oEvent) : void {
		if (oEvent.getParameter("cancelled")) {
			MessageToast.show("Scan cancelled", { duration:1000 });
		} else {
			if (oEvent.getParameter("text")) {
				oScanResultText.setText(oEvent.getParameter("text"));
			} else {
				oScanResultText.setText('');
			}
		}
	}

	public onScanError(oEvent) : void {
		MessageToast.show("Scan failed: " + oEvent, { duration:1000 });
	}

	public onAfterRendering() : void {
		oScanResultText = this.getView().byId("result");
		var oScanButton = this.getView().byId("button");
		if (oScanButton) {
			$(oScanButton.getDomRef()).on("click", function(){
				oScanResultText.setText('');
			});
		}
	}

}
