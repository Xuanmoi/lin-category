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
exports.AlgoliaService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const algoliasearch_1 = require("algoliasearch");
let AlgoliaService = class AlgoliaService {
    constructor(config) {
        this.config = config;
        this.client = (0, algoliasearch_1.algoliasearch)(this.config.get('ALGOLIA_APP_ID') || '', this.config.get('ALGOLIA_API_KEY') || '');
        this.indexName = this.config.get('ALGOLIA_INDEX_NAME') || 'fp_dev_products';
    }
    async searchCollection(handle) {
        const result = await this.client.searchSingleIndex({
            indexName: this.indexName,
            searchParams: {
                query: handle,
                filters: `handle:"${handle}"`,
            },
        });
        return result.hits?.[0] || null;
    }
    async searchProductsByCollection(handle) {
        const result = await this.client.searchSingleIndex({
            indexName: this.indexName,
            searchParams: {
                query: '',
                facetFilters: [['collections:' + handle]],
                hitsPerPage: 50,
            },
        });
        return result.hits || [];
    }
};
exports.AlgoliaService = AlgoliaService;
exports.AlgoliaService = AlgoliaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AlgoliaService);
//# sourceMappingURL=algolia.service.js.map