<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }

    public function options()
    {
        return $this->hasMany(Option::class);
    }

    public function correctOption()
    {
        return $this->hasOne(Option::class)->where('is_correct', true);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Scope: Get questions belonging to the current user
     */
    public function scopeForCurrentUser($query, $firebaseUid)
    {
        // Security: Return only if firebaseUid is provided and valid
        if (!$firebaseUid || !is_string($firebaseUid) || $firebaseUid === '') {
            return $query->whereRaw('1 = 0'); // Return empty result set
        }
        return $query->where('firebase_uid', $firebaseUid);
    }

    /**
     * Check if user can view this question
     */
    public function canView($firebaseUid)
    {
        return (string) $this->firebase_uid === (string) $firebaseUid;
    }

    /**
     * Check if user can edit/delete this question
     */
    public function canEdit($firebaseUid)
    {
        return $this->canView($firebaseUid);
    }
}