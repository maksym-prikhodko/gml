<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Multitenantable;
class Client extends Model
{
    use Multitenantable;
    protected $fillable = [
        'name',
    ];
    public function user()
    {
        return $this->belongsTo('App\User')->withDefault();
    }
    public function projects()
    {
        return $this->hasMany('App\Project');
    }
    public function incomes()
    {
        return $this->hasMany('App\Income');
    }
    public function outcomes()
    {
        return $this->hasMany('App\Outcome');
    }
    public function hours()
    {
        return $this->hasMany('App\Hour');
    }
    public function getTotalAttribute()
    {
        return rand(200,20000);
    }
    public function getHoursAttribute()
    {
        return rand(2, 12);
    }
    public function getPriceHourAttribute()
    {
        $price_hour = rand(25,50);
        $price_hour = currency_format((string) $price_hour);
        return $price_hour;
    }
}
