<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Multitenantable;
class Project extends Model
{
    use Multitenantable;
    protected $fillable = [
        'name', 'client_id', 'focus', 'hours_estimated', 'type', 'desired_price_hour', 'total_price',
        'order', 'archived'
    ];
    public function user()
    {
        return $this->belongsTo('App\User')->withDefault();
    }
    public function client()
    {
        return $this->belongsTo('App\Client')->withDefault();
    }
    public function tasks()
    {
        return $this->hasMany('App\Task');
    }
    public function getTotalAttribute()
    {
        return $this->total_price;
    }
    public function getIncomesAttribute() {
        return rand(0, $this->total);
    }
    public function getOutcomesAttribute()
    {
        return rand(0, ($this->total - ($this->total / 2)));
    }
    public function getBalanceAttribute()
    {
        return round($this->incomes - $this->outcomes, 2);
    }
    public function getHoursAttribute()
    {
        return rand(2,12);
    }
    public function getPriceHourAttribute()
    {
        $price_hour = round(($this->balance / $this->hours), 2);
        if ($price_hour > ($this->desired_price_hour * 5)) $price_hour = '-';
        else $price_hour = currency_format((string) $price_hour);
        return $price_hour;
    }
}
