import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import Press from "sap/ui/test/actions/Press";
import Action from "sap/ui/test/actions/Action";

/**
 * @namespace tufa.fioriDemo.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;

	public sayHello() : void {
		MessageBox.show("Hello World!");
	}

	/*
	public onPress(oEvent: any) : void {
		var oItem = oEvent.getSource();
		var oRouter = this.getOwnerComponent().getRouter();
		        
		var passwordPath = window.encodeURIComponent(oItem.getBindingContext("{/password}").getPath().substr(1));
		oRouter.navTo("emailDetail", {passwordPath: passwordPath});
	}
	*/

	public onPress() : void {
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("emailDetail");
	}

}
