<?php

namespace App\Http\Controllers;

use App\Models\Equipment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EquipmentController extends Controller
{
    public function create()
    {
        return Inertia::render('AddEquipment');
    }

    public function store(Request $request){
        $equipment = $request->all();
        Equipment::createEquipment($equipment);
    }

    public function fetch(Request $request){
        $equipmentId = $request->id;
        return Equipment::readEquipment($equipmentId);
    }

    public function update(Request $request){
        $equipment = $request->all();
        Equipment::updateEquipment($equipment);
    }

    public function delete(Request $request){
        $equipmentId = $request->id;
        Equipment::deleteEquipment($equipmentId);
    }
}
