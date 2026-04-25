import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('TimeOff System (E2E)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should create timeoff request', async () => {
    const res = await request(app.getHttpServer())
      .post('/timeoff/request')
      .send({
        employeeId: '1',
        locationId: 'SP',
        days: 2,
      });

    expect(res.status).toBe(201);
  });

  it('should reject if balance is insufficient', async () => {
    const res = await request(app.getHttpServer())
      .post('/timeoff/request')
      .send({
        employeeId: '1',
        locationId: 'SP',
        days: 999,
      });

    expect(res.status).toBe(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
