?php 

// Create a migration for hotels
php artisan make:migration create_hotels_table

// In the migration file
public function up()
{
    Schema::create('hotels', function (Blueprint $table) {
        $table->id();
        $table->string('hotel_name');
        $table->string('location');
        $table->float('rating');
        $table->decimal('price_per_night', 10, 2);
        $table->text('description')->nullable();
        $table->timestamps();
    });
}

// Create a migration for food
php artisan make:migration create_food_table

// In the migration file
public function up()
{
    Schema::create('food', function (Blueprint $table) {
        $table->id();
        $table->string('food_name');
        $table->string('cuisine_type');
        $table->decimal('price', 10, 2);
        $table->foreignId('hotel_id')->constrained()->onDelete('cascade');
        $table->text('description')->nullable();
        $table->timestamps();
    });
}
?>