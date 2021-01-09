<?php

use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_roles')->insert([
                [
                    'role' => 'Super admin',
                ],
                [
                    'role' => 'admin',
                ],
                [
                    'role' => 'User',
                ]
            ]

        );
    }
}
