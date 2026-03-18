import { Cat } from './interfaces/cat.interfaces';
export declare class CatsService {
    private readonly cats;
    create(cat: Cat): void;
    findAll(): Cat[];
}
