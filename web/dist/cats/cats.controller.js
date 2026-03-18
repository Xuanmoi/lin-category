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
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const create_cat_dto_1 = require("./create-cat.dto");
const cats_service_1 = require("./cats.service");
const roles_guard_1 = require("./roles.guard");
const roles_decorator_1 = require("./roles.decorator");
let CatsController = class CatsController {
    constructor(catsService) {
        this.catsService = catsService;
    }
    async findAll(req) {
        console.log(req.headers);
        return this.catsService.findAll();
    }
    findAllByCollection(req) {
        console.log(req.headers);
        return 'This action returns all cats by collection';
    }
    findAllTest(id, name) {
        return 'This action returns all cats';
    }
    findById(id) {
        return `This action returns a #${id} cat`;
    }
    async create(createCatDto) {
        this.catsService.create(createCatDto);
    }
};
exports.CatsController = CatsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('collection/*'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CatsController.prototype, "findAllByCollection", null);
__decorate([
    (0, common_1.Get)('test/:id'),
    (0, common_1.Redirect)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], CatsController.prototype, "findAllTest", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], CatsController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(['admin']),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "create", null);
exports.CatsController = CatsController = __decorate([
    (0, common_1.Controller)('cats'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsController);
//# sourceMappingURL=cats.controller.js.map