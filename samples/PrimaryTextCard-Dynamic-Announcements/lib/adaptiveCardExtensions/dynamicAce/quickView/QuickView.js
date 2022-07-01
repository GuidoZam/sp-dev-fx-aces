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
import { BaseAdaptiveCardView } from '@microsoft/sp-adaptive-card-extension-base';
import { CardSelectionType } from '../models/IListItem';
var QuickView = /** @class */ (function (_super) {
    __extends(QuickView, _super);
    function QuickView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(QuickView.prototype, "data", {
        get: function () {
            if (this.state.currentitem.OnCardSelectionType == CardSelectionType.QuickView) {
                return JSON.parse(this.state.currentitem.QuickViewAdaptiveCardData);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QuickView.prototype, "template", {
        get: function () {
            if (this.state.currentitem.OnCardSelectionType == CardSelectionType.QuickView) {
                return JSON.parse(this.state.currentitem.QuickViewAdaptiveCardJSON);
                //return require('./template/QuickViewTemplate.json');
            }
        },
        enumerable: false,
        configurable: true
    });
    return QuickView;
}(BaseAdaptiveCardView));
export { QuickView };
//# sourceMappingURL=QuickView.js.map