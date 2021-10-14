<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Multitenantable;
class Task extends Model
{
    use Multitenantable;
    protected $fillable = [
        'name', 'project_id', 'desc', 'focus', 'completed', 'due_date', 'inbox', 'order'
    ];
    public function user()
    {
        return $this->belongsTo('App\User')->withDefault();
    }
    public function project()
    {
        return $this->belongsTo('App\Project')->withDefault();
    }
}
