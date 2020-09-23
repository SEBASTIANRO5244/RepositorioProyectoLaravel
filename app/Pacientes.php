<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pacientes extends Model
{
    //
    protected $fillable = ["id","Nombre", "Email","Contra","Direccion"];
}
