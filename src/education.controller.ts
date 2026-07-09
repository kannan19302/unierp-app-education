import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { TenantRequest } from './tenant';
import { EducationService } from './education.service';

@Controller()
export class EducationController {
  constructor(private readonly service: EducationService) {}
  @Get('students')
  async getStudents(@Req() req: TenantRequest) {
    return this.service.getStudents(req.tenantContext.tenantId);
  }
  @Post('students')
  async createStudent(
    @Req() req: TenantRequest,
    @Body() dto: { firstName: string; lastName: string; dateOfBirth: string; enrollmentNumber: string; parentContact: string }
  ) {
    return this.service.createStudent(req.tenantContext.tenantId, dto);
  }
  @Get('courses')
  async getCourses(@Req() req: TenantRequest) {
    return this.service.getCourses(req.tenantContext.tenantId);
  }
  @Post('courses')
  async createCourse(
    @Req() req: TenantRequest,
    @Body() dto: { name: string; code: string; credits: number; description?: string }
  ) {
    return this.service.createCourse(req.tenantContext.tenantId, dto);
  }
  @Get('timetables')
  async getTimetables(@Req() req: TenantRequest) {
    return this.service.getTimetables(req.tenantContext.tenantId);
  }
  @Post('timetables')
  async createTimetable(
    @Req() req: TenantRequest,
    @Body() dto: { courseId: string; room: string; weekday: string; startTime: string; endTime: string; instructorId: string }
  ) {
    return this.service.createTimetable(req.tenantContext.tenantId, dto);
  }
  @Get('fee-structures')
  async getFeeStructures(@Req() req: TenantRequest) {
    return this.service.getFeeStructures(req.tenantContext.tenantId);
  }
  @Post('fee-structures')
  async createFeeStructure(
    @Req() req: TenantRequest,
    @Body() dto: { name: string; description?: string; amount: number; dueDate: string }
  ) {
    return this.service.createFeeStructure(req.tenantContext.tenantId, dto);
  }
  @Get('student-fees')
  async getStudentFees(@Req() req: TenantRequest) {
    return this.service.getStudentFees(req.tenantContext.tenantId);
  }
  @Post('student-fees/pay')
  async payStudentFee(
    @Req() req: TenantRequest,
    @Body() dto: { studentFeeId: string; paymentAmount: number }
  ) {
    return this.service.payStudentFee(req.tenantContext.tenantId, dto);
  }
  @Get('books')
  async getBookRegister(@Req() req: TenantRequest) {
    return this.service.getBookRegister(req.tenantContext.tenantId);
  }
  @Post('books')
  async createBook(
    @Req() req: TenantRequest,
    @Body() dto: { title: string; isbn: string; author: string; quantity: number }
  ) {
    return this.service.createBook(req.tenantContext.tenantId, dto);
  }
  @Get('book-transactions')
  async getBookTransactions(@Req() req: TenantRequest) {
    return this.service.getBookTransactions(req.tenantContext.tenantId);
  }
  @Post('books/checkout')
  async checkoutBook(
    @Req() req: TenantRequest,
    @Body() dto: { studentId: string; bookId: string; dueDate: string }
  ) {
    return this.service.checkoutBook(req.tenantContext.tenantId, dto);
  }
  @Post('books/return')
  async returnBook(
    @Req() req: TenantRequest,
    @Body() dto: { transactionId: string }
  ) {
    return this.service.returnBook(req.tenantContext.tenantId, dto);
  }
}
