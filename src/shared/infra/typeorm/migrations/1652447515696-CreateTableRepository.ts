import {MigrationInterface, QueryRunner, Table} from "typeorm"

export class CreateTableRepository1652447515696 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'repository',
                columns: [
                    {
                        name: 'id_repository',
                        type: 'integer',
                        width: 9,
                        isUnique: true,
                        isPrimary: true
                    },
                    {
                        name: 'html_url',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'varchar'
                    },
                    {
                        name: 'updated_at',
                        type: 'varchar'
                    },
                    {
                        name: 'id_user',
                        type: 'char',
                        length: '50',
                        isUnique: true
                    }
                ],
                foreignKeys: [
                    {
                        name: 'repository_user_FK',
                        referencedTableName: 'user',
                        columnNames: ['id_user'],
                        referencedColumnNames: ['id_user']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('repository');
    }

}
