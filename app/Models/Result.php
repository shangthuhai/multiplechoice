<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;

    // DÒNG QUAN TRỌNG NHẤT: Cho phép lưu dữ liệu vào mọi cột
    protected $guarded = []; 
}