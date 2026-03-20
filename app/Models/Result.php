<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    use HasFactory;

    // DÒNG QUAN TRỌNG NHẤT: Cho phép lưu dữ liệu vào mọi cột
    protected $guarded = []; 

    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }

    public function answers()
    {
        return $this->hasMany(ResultAnswer::class);
    }
}