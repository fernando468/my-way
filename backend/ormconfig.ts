import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

const options: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'learninglanguage',
    synchronize: false,
    logging: false,
    migrations: [path.join(__dirname, 'src', 'db', 'migrations', '*.ts')],
    entities: ['dist/src/main/**/*.entity.{js, ts}', 'dist/src/utils/shared/entities/*.entity.{js, ts}'],
    cli: {
        entitiesDir: 'src/main/entity',
        migrationsDir: 'src/db/migrations'
    }
};

module.exports = options;
