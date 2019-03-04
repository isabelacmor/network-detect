"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var NetworkDetectStyles_1 = require("./NetworkDetectStyles");
var NetworkDetect = /** @class */ (function (_super) {
    __extends(NetworkDetect, _super);
    function NetworkDetect(props) {
        var _this = _super.call(this, props) || this;
        _this.getLoadingAnimation = function () {
            return _this.props.loadingAnimation !== undefined ? _this.props.loadingAnimation : NetworkDetect.loadingAnimation;
        };
        _this.updateNetworkState = function (event) {
            if (event.type === "offline") {
                _this.setState({ isOffline: true });
            }
            else if (event.type === "online") {
                _this.setState({ isOffline: false });
            }
        };
        _this.state = {
            isOffline: !navigator.onLine
        };
        return _this;
    }
    NetworkDetect.prototype.componentDidMount = function () {
        window.addEventListener("offline", this.updateNetworkState);
        window.addEventListener("online", this.updateNetworkState);
    };
    NetworkDetect.prototype.componentWillUnmount = function () {
        window.removeEventListener("offline", this.updateNetworkState);
        window.addEventListener("online", this.updateNetworkState);
    };
    NetworkDetect.prototype.render = function () {
        return (this.state.isOffline ? this.getLoadingAnimation() : this.props.children);
    };
    NetworkDetect.loadingAnimation = React.createElement("div", { style: NetworkDetectStyles_1.styles.loadingContainer },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", id: "loader-1", x: "0px", y: "0px", width: "40px", height: "40px", viewBox: "0 0 40 40", "enable-background": "new 0 0 40 40" },
            React.createElement("path", { opacity: "0.2", fill: "#000", d: "M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z" }),
            React.createElement("path", { fill: "#000", d: "M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n          C22.32,8.481,24.301,9.057,26.013,10.047z" },
                React.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "rotate", from: "0 20 20", to: "360 20 20", dur: "0.5s", repeatCount: "indefinite" }))));
    return NetworkDetect;
}(React.Component));
exports.default = NetworkDetect;
