sap.ui.jsview("jsondatabind.json-databind", {

	getControllerName : function() {
		return "jsondatabind.json-databind";
	},

	createContent : function(oController) {
		// Create instance of JSON model
		var oJSONModel = new sap.ui.model.json.JSONModel();

		// Load JSON in model
		oJSONModel.loadData("json/week.json");
		
		// Create instance of table control
		var oTable = new sap.ui.table.Table({
			title : "Comment this week",
			visibleRowCount : 7,
			firstVisibleRow : 0
		});

		// First column "Day"
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "day"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text", "day"),
			width : "150px"
		}));

		// Second column "Comment"
		oTable.addColumn(new sap.ui.table.Column({
			label : new sap.ui.commons.Label({
				text : "Comment"
			}),
			template : new sap.ui.commons.TextView().bindProperty("text", "comment"),
			width : "300px"
		}));

		// abbreviated
		// Bind model to table control
		oTable.setModel(oJSONModel);
		oTable.bindRows("/week");
		oTable.placeAt("content");
	}
});
