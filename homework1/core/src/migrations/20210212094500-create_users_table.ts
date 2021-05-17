import { MigrationInterface, QueryRunner, Table } from 'typeorm'
export class CreateUsersTable20210212094500 implements
MigrationInterface {
 async up(queryRunner: QueryRunner): Promise<void> {
 await queryRunner.createTable(
 new Table({
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
 }),
 true
 )
 }
 async down(queryRunner: QueryRunner): Promise<void> {
 await queryRunner.dropTable('users')
 }
}
