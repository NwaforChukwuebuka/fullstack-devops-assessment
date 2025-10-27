<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    try {
        // Try to connect to database
        DB::connection()->getPdo();
        $dbConnected = true;
        $dbName = DB::connection()->getDatabaseName();
    } catch (\Exception $e) {
        $dbConnected = false;
        $dbName = 'Not connected';
        $error = $e->getMessage();
    }
    
    return response()->json([
        'message' => 'Backend is running',
        'database_connected' => $dbConnected,
        'database_name' => $dbName,
        'database_error' => $error ?? null,
        'environment' => config('app.env'),
        'debug' => config('app.debug'),
    ], 200, [], JSON_PRETTY_PRINT);
});

// Test database endpoint
Route::get('/test-db', function () {
    try {
        $pdo = DB::connection()->getPdo();
        return response()->json([
            'status' => 'connected',
            'database' => DB::connection()->getDatabaseName(),
        ]);
    } catch (\Exception $e) {
        return response()->json([
            'status' => 'failed',
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString(),
        ], 500);
    }
});
