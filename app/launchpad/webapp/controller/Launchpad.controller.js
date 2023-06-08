sap.ui.define(
  ["sap/m/MessageBox", "./BaseController"],
  function (MessageBox, __BaseController) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule && typeof obj.default !== "undefined"
        ? obj.default
        : obj;
    }
    var BaseController = _interopRequireDefault(__BaseController); // import formatter from "../model/formatter";
    /**
     * @namespace company1.forecasting.launchpad.controller
     */
    var launchpad = BaseController.extend(
      "company1.forecasting.launchpad.controller.launchpad",
      {
        onInit: function _onInit() {},
        sayHello: function _sayHello() {
          MessageBox.show("Hello World3!");
        },
        onClick: function _onClick() {
          debugger;
        },
      }
    );
    return launchpad;
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCYXNlQ29udHJvbGxlciIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfX0Jhc2VDb250cm9sbGVyIiwibGF1bmNocGFkIiwiZXh0ZW5kIiwib25Jbml0IiwiX29uSW5pdCIsInNheUhlbGxvIiwiX3NheUhlbGxvIiwiTWVzc2FnZUJveCIsInNob3ciLCJvbkNsaWNrIiwiX29uQ2xpY2siXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9MYXVuY2hwYWQuY29udHJvbGxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVzc2FnZUJveCBmcm9tIFwic2FwL20vTWVzc2FnZUJveFwiO1xuaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXCIuL0Jhc2VDb250cm9sbGVyXCI7XG4vLyBpbXBvcnQgZm9ybWF0dGVyIGZyb20gXCIuLi9tb2RlbC9mb3JtYXR0ZXJcIjtcblxuLyoqXG4gKiBAbmFtZXNwYWNlIElsbHVtaXRpLmZvcmVjYXN0aW5nLmxhdW5jaHBhZC5jb250cm9sbGVyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxhdW5jaHBhZCBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcbiAgICAvLyBwcml2YXRlIGZvcm1hdHRlciA9IGZvcm1hdHRlcjtcblxuICAgIHB1YmxpYyBvbkluaXQoKTogdm9pZCB7fVxuXG4gICAgcHVibGljIHNheUhlbGxvKCk6IHZvaWQge1xuICAgICAgICBNZXNzYWdlQm94LnNob3coXCJIZWxsbyBXb3JsZDMhXCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgICAgICBkZWJ1Z2dlcjtcbiAgICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7TUFDT0EsY0FBYyxHQUFBQyxzQkFBQSxDQUFBQyxnQkFBQSxHQUNyQjtFQUVBO0FBQ0E7QUFDQTtFQUZBLElBR3FCQyxTQUFTLEdBQVNILGNBQWMsQ0FBQUksTUFBQTtJQUcxQ0MsTUFBTSxXQUFBQyxRQUFBLEVBQVMsQ0FBQyxDQUFDO0lBRWpCQyxRQUFRLFdBQUFDLFVBQUEsRUFBUztNQUNwQkMsVUFBVSxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3BDLENBQUM7SUFFTUMsT0FBTyxXQUFBQyxTQUFBLEVBQVM7TUFDbkI7SUFDSjtFQUFDO0VBQUEsT0FYZ0JULFNBQVM7QUFBQSJ9
