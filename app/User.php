<?php
namespace App;
use App\Notifications\ResetPassword;
use App\Notifications\VerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Tymon\JWTAuth\Contracts\JWTSubject;
class User extends Authenticatable implements JWTSubject, MustVerifyEmail
{
    use Notifiable;
    protected $fillable = [
        'name', 'email', 'password',
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    protected $appends = [
        'photo_url',
    ];
    public function currency()
    {
        return $this->belongsTo('App\Currency');
    }
    public function getPhotoUrlAttribute()
    {
        return 'https:
    }
    public function oauthProviders()
    {
        return $this->hasMany(OAuthProvider::class);
    }
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPassword($token));
    }
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail);
    }
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }
}
