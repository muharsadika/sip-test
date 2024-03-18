<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'group',
        'description',
        'mandatory',
        'sequence',
        'parent',
        'type',
        'is_multiple',
        'remark',
        'status',
        'created_by',
        'updated_by',
        'deleted_at',
        'is_multiplied',
    ];
}
