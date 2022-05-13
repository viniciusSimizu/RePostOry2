import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class CreateTableUser1652446806183 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id_user',
                        type: 'char',
                        length: '50',
                        isUnique: true,
                        isPrimary: true
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'password',
                        type: 'char',
                        length: '60'
                    },
                    {
                        name: 'username',
                        type: 'varchar',
                        isUnique: true
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
