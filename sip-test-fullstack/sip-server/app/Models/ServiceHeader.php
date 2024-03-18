<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceHeader extends Model
{
    use HasFactory;
    protected $fillable = [
        'service_name',
        'mandatory',
        'package_id',
        'debitur_type_id',
        'service_price_amount',
        'service_discount_amount',
        'status',
        'created_by',
        'updated_by',
        'deleted_at',
        'service_price_discount',
    ];
}
