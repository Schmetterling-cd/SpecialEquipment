<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use App\Models\EquipmentSpecializations;

class Equipment extends Model{

    use HasFactory;

    protected $table = "equipment";
    protected $fillable = [
        'id',
        'user_id',
        'equipment_id',
        'equipment_type_id',
        'create_at',
        'update_at',
    ];

    public static function createEquipment($equipment)
    {
        DB::transaction(function() use($equipment){
            $equipmentId = Equipment::insertGetId([
                'user_id' => $equipment->user_id,
                'equipment_type_id' => $equipment->equipment_type_id,
                'name' => $equipment->name,
                'coast' => $equipment->coast,
                'photo' => $_FILES[0],
            ]);

            $specializations = [];
            foreach ($equipment->specializations as $specialization){
                $spec_item_array = [
                    'equipment_type_spec_id' => $specialization->equipment_type_spec_id,
                    'equipment_id' => $equipmentId,
                    'value' => $specialization->value,
                ];

                array_push($specialization, $spec_item_array);
            }

            EquipmentSpecializations::insert($specializations);
        });
    }

    public static function readEquipment($equipmentId)
    {
        return DB::transaction(function() use($equipmentId){
            $equipment = Equipment::find($equipmentId);

            $specializations = EquipmentSpecializations::leftJoin('equipment_type_specializations', 'equipment_specializations.type_spec_id', '=','equipment_type_specializations.id')
                ->where('id', '=', $equipmentId)
                ->get();

            // return equipment with all options
            return (object)[
                'id' => $equipmentId,
                'name' => $equipment->name,
                'equipment_type_id' => $equipment->equipment_type_id,
                'coast' => $equipment->coast,
                'photo' => $equipment->photo,
                'specializations' => $specializations,
            ];
        });
    }

    public static function updateEquipment($equipment)
    {
        DB::transaction(function() use($equipment){
            Equipment::where('equipment_id', $equipment->id)
                ->update([
                    'user_id' => $equipment->user_id,
                    'equipment_type_id' => $equipment->equipment_type_id,
                    'name' => $equipment->name,
                    'coast' => $equipment->coast,
                    'photo' => $_FILES[0],
                ]);

            $specializations = [];
            foreach ($equipment->specializations as $specialization){
                $spec_item_array = [
                    'equipment_type_spec_id' => $specialization->equipment_type_spec_id,
                    'equipment_id' => $equipment->id,
                    'value' => $specialization->value,
                ];

                array_push($specialization, $spec_item_array);
            }

            EquipmentSpecializations::insert($specializations);
        });
    }

    public static function deleteEquipment($equipmentId)
    {
        DB::transaction(function() use($equipmentId){
            EquipmentSpecializations::where('equipment_id', $equipmentId)->delete();
            Equipment::where('id', $equipmentId)->delete();
        });
    }


}