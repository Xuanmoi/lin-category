"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const ejs = require("ejs");
const algolia_service_1 = require("../algolia/algolia.service");
let CollectionsService = class CollectionsService {
    constructor(algolia) {
        this.algolia = algolia;
    }
    async renderCollection(handle, shop) {
        const categoryInfo = await this.algolia.searchCollection(handle);
        const products = await this.algolia.searchProductsByCollection(handle);
        const templatePath = (0, path_1.join)(__dirname, '..', '..', 'views', 'categories.ejs');
        const templateContent = await (0, promises_1.readFile)(templatePath, 'utf-8');
        return ejs.render(templateContent, {
            shop,
            handle,
            categoryInfo,
            products,
            appName: 'Lin Category',
            timestamp: new Date().toLocaleString('zh-CN'),
        });
    }
};
exports.CollectionsService = CollectionsService;
exports.CollectionsService = CollectionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof algolia_service_1.AlgoliaService !== "undefined" && algolia_service_1.AlgoliaService) === "function" ? _a : Object])
], CollectionsService);
//# sourceMappingURL=collections.service.js.map