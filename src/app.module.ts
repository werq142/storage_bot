import { Module } from '@nestjs/common';
import { FileService } from './services/app.service';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppUpdate } from './app.update';
import { session } from 'telegraf';
import { SendFileScene } from './scenes/send-file.scene';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TelegrafModule.forRoot({
      token: process.env.TELEGRAM_BOT_TOKEN,
      botName: 'Storage bot',
      middlewares: [session()],
    }),
  ],
  providers: [AppUpdate, FileService, SendFileScene],
})
export class AppModule {}
