"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
exports.default = (function () { return describe('getData', function () {
    this.timeout(5000);
    before(function () {
        var documentElement = document.documentElement;
        var dataset = documentElement.dataset;
        dataset.vamtigerTextMode = '';
    });
    it.skip('json-ld', jsonLdTest);
    it('json-ld-data', jsojsonLdDatanTest);
}); });
function jsojsonLdDatanTest() {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, getData, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    VamtigerBrowserMethod = window.VamtigerBrowserMethod;
                    getData = VamtigerBrowserMethod.getData;
                    return [4 /*yield*/, getData({
                            json: 'test/json-data/json-ld.js'
                        })];
                case 1:
                    data = _a.sent();
                    chai_1.expect(data).to.be.ok;
                    chai_1.expect(data.jsonLd).to.be.ok;
                    chai_1.expect(data.jsonLd['@context']).to.be.ok;
                    chai_1.expect(data.json).to.be.ok;
                    return [2 /*return*/];
            }
        });
    });
}
function jsonLdTest() {
    return __awaiter(this, void 0, void 0, function () {
        var VamtigerBrowserMethod, getData, data, currentJsonLd, jsonLd;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    VamtigerBrowserMethod = window.VamtigerBrowserMethod;
                    getData = VamtigerBrowserMethod.getData;
                    return [4 /*yield*/, getData({
                            jsonLd: 'https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/build/vamtiger-mental-health-botswana-2018-json-ld.js',
                            textMode: true
                        })];
                case 1:
                    data = _a.sent();
                    currentJsonLd = data.jsonLd;
                    jsonLd = currentJsonLd[0];
                    chai_1.expect(jsonLd).to.be.ok;
                    chai_1.expect(jsonLd['@context']).to.equal('http://schema.org');
                    chai_1.expect(jsonLd['@type']).to.equal('VisualArtwork');
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=get-data.js.map