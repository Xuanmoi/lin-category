import { Controller, Get } from '@nestjs/common';

@Controller({ host: 'admin.example.com' })
export class AdminController {
  @Get()
  getAdmin(): string {
    return 'Admin';
  }
}
