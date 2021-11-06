import {
  Scene,
  SceneEnter,
  SceneLeave,
  Command,
  On,
  Message,
} from 'nestjs-telegraf';
import { SEND_FILE_SCENE } from '../app.constants';
import { Context } from '../interfaces/context.interface';
import { FileService } from '../services/app.service';

@Scene(SEND_FILE_SCENE)
export class SendFileScene {
  constructor(private readonly FileService: FileService) {}

  @SceneEnter()
  onSceneEnter(): string {
    console.log('Enter to scene');
    return 'Send file';
  }

  @On('photo')
  onMessage(@Message() message): string {
    const fileInfo = message.photo[message.photo.length - 1];
    /* TODO save file */
    return 'Ok';
  }

  @SceneLeave()
  onSceneLeave(): string {
    console.log('Leave from scene');
    return 'Bye Bye 👋';
  }

  @Command('finish')
  async onLeaveCommand(ctx: Context): Promise<void> {
    await ctx.scene.leave();
  }
}
