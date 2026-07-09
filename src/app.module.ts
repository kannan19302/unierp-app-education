import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { EducationController } from './education.controller';
import { EducationCoreController } from './education-core.controller';
import { EducationService } from './education.service';
import { EducationCoreService } from './education-core.service';

@Module({
  controllers: [HealthController, EducationController, EducationCoreController],
  providers: [EducationService, EducationCoreService],
})
export class AppModule {}
