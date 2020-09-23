<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/PostServicios","ServicioController@Store");
Route::get("/GetServicios","ServicioController@GetServicios");
Route::delete("/DeleteServicios/{id}","ServicioController@DeleteServicios");


Route::post("/PostPacientes","PacientesController@Store");
Route::get("/GetPacientes","PacientesController@GetServicios");


