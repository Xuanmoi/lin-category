import type { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interfaces';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    findAll(req: Request): Promise<Cat[]>;
    findAllByCollection(req: Request): string;
    findAllTest(id: string, name: string): string;
    findById(id: string): string;
    create(createCatDto: CreateCatDto): Promise<void>;
}
