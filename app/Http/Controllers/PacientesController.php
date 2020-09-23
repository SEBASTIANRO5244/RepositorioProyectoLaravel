<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pacientes;

class PacientesController extends Controller
{
    //
    public function Store(Request $request){
        $input = $request->all();
        $paci = Pacientes::create($input);
        return response()->json($paci);
    }
 
    public function GetPacientes()
    {
        # code...
        $datos['result'] = Pacientes::all();
        return response()->json($datos);
    }
}
