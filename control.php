php artisan make:controller HotelController
php artisan make:controller FoodController
php artisan make:controller DashboardController


// In HotelController.php
public function index()
{
    $hotels = Hotel::all();
    return response()->json($hotels);
}

public function search(Request $request)
{
    $searchTerm = $request->query('q');
    $hotels = Hotel::where('hotel_name', 'LIKE', "%{$searchTerm}%")->get();
    return response()->json($hotels);
}
