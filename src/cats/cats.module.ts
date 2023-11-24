import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// 1. nest g module cats

@Module({
    controllers: [CatsController],
    providers: [CatsService]
})
export class CatsModule {}
