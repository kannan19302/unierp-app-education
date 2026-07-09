import { Controller, Get, Post, Param, Req, Body, UseGuards } from '@nestjs/common';
import { TenantRequest } from './tenant';
import { ScopeGuard } from './scope.guard';
import { EducationCoreService } from './education-core.service';

@UseGuards(ScopeGuard)
@Controller('core')
export class EducationCoreController {
  constructor(private readonly educationCore: EducationCoreService) {}
  @Post('enrol')
  async enrolStudent(@Req() req: TenantRequest, @Body() body: { studentId: string; courseId: string; academicYear: string }) {
    return this.educationCore.enrolStudent(req.tenantContext.tenantId, body);
  }
  @Post('grades')
  async recordGrade(@Req() req: TenantRequest, @Body() body: any) {
    return this.educationCore.recordGrade(req.tenantContext.tenantId, body);
  }
  @Get('transcript/:studentId')
  async getTranscript(@Req() req: TenantRequest, @Param('studentId') studentId: string) {
    return this.educationCore.getStudentTranscript(req.tenantContext.tenantId, studentId);
  }
  @Post('attendance')
  async recordAttendance(@Req() req: TenantRequest, @Body() body: any) {
    return this.educationCore.recordAttendance(req.tenantContext.tenantId, body);
  }
  @Post('fees/invoice')
  async generateFee(@Req() req: TenantRequest, @Body() body: { studentId: string; feeStructureId: string }) {
    return this.educationCore.generateFeeInvoice(req.tenantContext.tenantId, body.studentId, body.feeStructureId);
  }
}
