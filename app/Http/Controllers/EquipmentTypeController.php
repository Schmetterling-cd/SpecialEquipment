<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\EquipmentType;
use App\Models\EquipmentTypeSpecializations;

class EquipmentTypeController extends Controller
{
    public function create()
    {
        return Inertia::render('AddEquipmentType');
    }

    public function store(Request $request)
    {
        $type = $request->all();
        EquipmentType::createEquipmentType($type);
    }

    public function fetch(Request $request){
        $typeId = $request->id;
        return EquipmentType::readEquipmentType($typeId);
    }

    public function fetchAll(){
        return EquipmentType::readAllEquipmentTypes();
    }

    public function update(Request $request){
        $type = $request->all();
        EquipmentType::updateEquipmentType($type);
    }

    public function delete(Request $request){
        $typeId = $request->id;
        EquipmentType::deleteEquipmentType($typeId);
    }

    public function addSpecialization(Request $request){
        $specialization = $request->all();
        EquipmentTypeSpecializations::createEquipmentTypeSpecializations($specialization);
    }

    public function deleteSpecialization(Request $request){
        $specializationId = $request->id;
        EquipmentTypeSpecializations::deleteEquipmentTypeSpecializations($specializationId);
    }
}
