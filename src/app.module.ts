import { PostController } from '@application/controllers/post.controller';
import { UserController } from '@application/controllers/user.controller';
import { PostService } from '@domain/services/post.service';
import { UserService } from '@domain/services/user.service';
import { DatabaseModule } from '@infrastructure/data/provider/database/database.module';
import { AlbumRepository } from '@infrastructure/data/repository/album.repository';
import { ImageRepository } from '@infrastructure/data/repository/images.repository';
import { PostRepository } from '@infrastructure/data/repository/post.repository';
import { UserRepository } from '@infrastructure/data/repository/user.repository';
import { registerProviders } from '@infrastructure/data/models';
import { HttpModule, Module } from '@nestjs/common';
import { RegisterService } from '@domain/services/register.service';
import { RegisterRepository } from '@infrastructure/data/repository/register.repository';
import { RegisterController } from '@application/controllers/register.controller';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [ UserController, PostController,RegisterController],
  providers: [
              PostService,
              UserService,
              RegisterService,
              UserRepository,
              PostRepository,
              AlbumRepository,
              ImageRepository,
              RegisterRepository,
              ...registerProviders
             ],
  exports: []
})
export class AppModule {}