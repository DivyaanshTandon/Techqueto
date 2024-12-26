// In routes/api.php
Route::get('/hotels', [HotelController::class, 'index']);
Route::get('/food', [FoodController::class, 'index']);
Route::get('/hotels/search', [HotelController::class, 'search']);
Route::get('/food/search', [FoodController::class, 'search']);
Route::get('/dashboard', [DashboardController::class, 'index']);