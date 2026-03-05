import { ConfigService } from '@nestjs/config';
export declare class AlgoliaService {
    private config;
    private client;
    private indexName;
    constructor(config: ConfigService);
    searchCollection(handle: string): Promise<{
        objectID: string;
        _highlightResult?: {
            [key: string]: import("algoliasearch").HighlightResult;
        } | undefined;
        _snippetResult?: {
            [key: string]: import("algoliasearch").SnippetResult;
        } | undefined;
        _rankingInfo?: import("algoliasearch").RankingInfo | undefined;
        _distinctSeqID?: number | undefined;
    }>;
    searchProductsByCollection(handle: string): Promise<{
        objectID: string;
        _highlightResult?: {
            [key: string]: import("algoliasearch").HighlightResult;
        } | undefined;
        _snippetResult?: {
            [key: string]: import("algoliasearch").SnippetResult;
        } | undefined;
        _rankingInfo?: import("algoliasearch").RankingInfo | undefined;
        _distinctSeqID?: number | undefined;
    }[]>;
}
