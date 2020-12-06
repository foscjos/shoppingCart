"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapDispatchToProps = void 0;
var React = require("react");
var react_redux_1 = require("react-redux");
var counter_action_1 = require("../Actions/counter-action");
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Counter.prototype.render = function () {
        var _this = this;
        console.log('entering render');
        console.log(this.props.count);
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "Counter"),
            React.createElement("p", null, "This is a simple example of a React component."),
            React.createElement("p", { "aria-live": "polite" },
                "Current count: ",
                React.createElement("strong", null, this.props.count)),
            React.createElement("button", { type: "button", className: "btn btn-primary btn-lg", onClick: function () { _this.props.incrementTest(); } }, "Increment")));
    };
    return Counter;
}(React.PureComponent));
;
var mapDispatchToProps = function (dispatch) {
    return {
        incrementTest: function () { return dispatch(counter_action_1.incrementActionTest()); },
    };
};
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(function (state) { return state.counter; }, exports.mapDispatchToProps)(Counter);
//# sourceMappingURL=Counter.js.map