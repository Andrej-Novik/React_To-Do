"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable20210212094500 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable20210212094500 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                    isPrimary: true,
                },
                {
                    name: 'firstName',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'lastName',
                    type: 'varchar',
                    isNullable: false,
                }
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('users');
    }
}
exports.CreateUsersTable20210212094500 = CreateUsersTable20210212094500;
