<?php
namespace App\Http\Controllers;
use App\ApiCode;
use App\Mit;
use Illuminate\Http\Request;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder;
use Carbon\Carbon;
class DashboardController extends Controller
{
    public function index()
    {
        $this->middleware('auth');
    }
    public function fetchWeek(Request $request)
    {
        $collection = [];
        $which = $request->get('which');
        if ($which == 'previous') {
            $monday = Carbon::now()->subWeek()->startOfWeek();
            $week_title = __('genomada.last_week');
        } else if ($which == 'next') {
            $monday = Carbon::now()->addWeek()->startOfWeek();
            $week_title = __('genomada.next_week');
        } else {
            $monday = Carbon::now()->startOfWeek();
            $week_title = __('genomada.this_week');
        }
        for ($columna = 0; $columna < 6; $columna++) {
            if ($columna == 0) $name = __('genomada.monday');
            else if ($columna == 1) $name = __('genomada.tuesday');
            else if ($columna == 2) $name = __('genomada.wednesday');
            else if ($columna == 3) $name = __('genomada.thursday');
            else if ($columna == 4) $name = __('genomada.friday');
            else $name = __('genomada.weekend');
            if ($columna > 0) $day = $monday->add(1, 'days')->format('Y-m-d');
            else $day = $monday->format('Y-m-d');
            $thisColumn = [];
            foreach (Mit::where('day', $day)->orderBy('order', 'asc')->get() as $item) {
                array_push($thisColumn, [
                    'id' => $item->id,
                    'name' => $item->name,
                    'completed' => $item->completed,
                ]);
            }
            $name = $name . ' ' . date('d', strtotime($day));
            if ($columna == 5) $name = __('genomada.weekend');
            $newTask = [
                'name' => '',
                'day' => $day,
                'completed' => 0,
                'order' => 0,
            ];
            array_push($collection, [
                'week_title' => $week_title,
                'column' => $columna,
                'name' => $name,
                'day' => $day,
                'mits' => $thisColumn,
                'adding' => false,
            ]);
        }
        return ResponseBuilder::success($collection);
    }
}
