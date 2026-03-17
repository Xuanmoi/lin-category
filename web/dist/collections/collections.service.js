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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsService = void 0;
const common_1 = require("@nestjs/common");
const algolia_service_1 = require("../algolia/algolia.service");
let CollectionsService = class CollectionsService {
    constructor(algolia) {
        this.algolia = algolia;
    }
    async getCollectionsData(handle) {
        const timestamp = new Date().toLocaleString('zh-CN');
        const { categoryInfo, products } = await this.fetchContent(handle);
        return {
            timestamp,
            handle,
            categoryInfo,
            products,
            content: categoryInfo || `分类 ${handle}`,
        };
    }
    async fetchContent(handle) {
        const [categoryInfo, products] = await Promise.all([
            this.algolia.searchCollection(handle),
            this.algolia.searchProductsByCollection(handle),
        ]);
        return { categoryInfo, products };
    }
};
exports.CollectionsService = CollectionsService;
exports.CollectionsService = CollectionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [algolia_service_1.AlgoliaService])
], CollectionsService);
//# sourceMappingURL=collections.service.js.map