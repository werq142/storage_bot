import { Command, Ctx, Hears, Start, Update, Sender } from 'nestjs-telegraf';
import { Scenes } from 'telegraf';
import { SEND_FILE_SCENE } from './app.constants';

@Update()
export class AppUpdate {
  @Start()
  onStart(): string {
    return `Hello, I'm the storage bot. You can send me anything, associate it with the title and get it late.`;
  }

  @Hears(['hi', 'hello', 'hey', 'qq'])
  onGreetings(@Sender('first_name') firstName: string): string {
    return `Hey ${firstName}`;
  }

  @Command('help')
  onHelp(): string {
    return `Type /send_file, send file, name it and type /finish`;
  }

  @Command('send_file')
  async onSceneCommand(@Ctx() ctx: Scenes.SceneContext): Promise<void> {
    await ctx.scene.enter(SEND_FILE_SCENE);
  }
}
