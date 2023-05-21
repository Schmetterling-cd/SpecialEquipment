<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Carbon;
use Sprite\Premissions\Models\Role;

class CreateSuperUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $date = Carbon::now();

        $superUser = User::create([
            'email' => 'admin@specialequipment.by',
            'name' => 'Администратор',
            'password' => Hash::make('phpartisan'),
            'created_at' => $date,
            'updated_at' => $date,
        ]);

        Role::create([
            'name' => 'super-user',
            'created_at' => $date,
            'updated_at' => $date,
        ]);

        $superUser->assignRole('super-user');
    }
}
