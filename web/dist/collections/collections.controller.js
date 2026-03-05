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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionsController = void 0;
const common_1 = require("@nestjs/common");
const collections_service_1 = require("./collections.service");
let CollectionsController = class CollectionsController {
    constructor(collections) {
        this.collections = collections;
    }
    list() {
        return 'test collection';
    }
    async getCollection(handle, shop, res) {
        try {
            const shopDomain = shop || 'fp-dev-au.myshopify.com';
            const html = await this.collections.renderCollection(handle, shopDomain);
            res.setHeader('Content-Type', 'application/liquid').send(html);
        }
        catch (error) {
            console.error('分类查询失败:', error);
            res.status(500).send('分类加载失败');
        }
    }
};
exports.CollectionsController = CollectionsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CollectionsController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':handle'),
    __param(0, (0, common_1.Param)('handle')),
    __param(1, (0, common_1.Query)('shop')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "getCollection", null);
exports.CollectionsController = CollectionsController = __decorate([
    (0, common_1.Controller)('collections'),
    __metadata("design:paramtypes", [collections_service_1.CollectionsService])
], CollectionsController);
//# sourceMappingURL=collections.controller.js.map