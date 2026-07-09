import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { tenantContextMiddleware } from '@unerp/service-kit';
import { AppModule } from './app.module';

const APP_SLUG = 'education';
const HEALTH_PATH = '/svc/health';

async function bootstrap() {
  const secret = process.env.EXT_SERVICE_JWT_SECRET;
  if (!secret) throw new Error('EXT_SERVICE_JWT_SECRET must be set');

  const app = await NestFactory.create(AppModule);
  app.use(
    tenantContextMiddleware({
      secret,
      appSlug: APP_SLUG,
      publicPaths: [HEALTH_PATH],
    }),
  );

  const port = Number(process.env.PORT) || 4101;
  await app.listen(port);
  // eslint-disable-next-line no-console
  console.log(`unierp-app-education service listening on :${port} (health at ${HEALTH_PATH})`);
}

bootstrap();
