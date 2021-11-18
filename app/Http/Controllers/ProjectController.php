<?php
namespace App\Http\Controllers;
use App\ApiCode;
use App\Project;
use Illuminate\Http\Request;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder;
class ProjectController extends Controller
{
    public function index()
    {
        $this->middleware('auth');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'client_id' => 'required|exists:clients,id',
            'hours_estimated' => 'required|integer',
        ]);
        $type = $request->get('type');
        if ($type == "hours") {
            $desired_price_hour = $request->get('desired_price_hour');
            $total_price = $request->get('hours_estimated') * $desired_price_hour;
        } else {
            $desired_price_hour = 0;
            $total_price = $request->get('total_price');
            if ($total_price > 0) $desired_price_hour = $total_price / $request->get('hours_estimated');
        }
        $item = new Project([
            'name' => trim($request->get('name')),
            'client_id' => $request->get('client_id'),
            'type' => $type,
            'hours_estimated' => $request->get('hours_estimated'),
            'total_price' => $total_price,
            'desired_price_hour' => $desired_price_hour,
        ]);
        $item->save();
        return ResponseBuilder::success($item);
    }
    public function show(Project $project)
    {
        $item = Project::find($project->id);
        if ($item) {
            $collection = [
                'id' => $item->id,
                'name' => $item->name,
                'client' => $item->client->name,
                'total' => currency_format((string) $item->total),
                'balance' => currency_format((string) $item->balance),
                'hours_estimated' => $item->hours_estimated . 'h',
                'hours' => $item->hours . 'h',
                'desired_price_hour' => currency_format((string) $item->desired_price_hour),
                'price_hour' => $item->price_hour,
                'focus' => $item->focus,
                'order' => $item->order,
                'archived' => $item->archived,
                'type' => $item->type
            ];
        } else $collection = new Project();
        return ResponseBuilder::success($collection);
    }
    public function fetchRaw(Request $request)
    {
        $item = Project::find($request->id);
        if (!$item) $item = new Project();
        return ResponseBuilder::success($item);
    }    
    public function edit(Project $project)
    {
    }
    public function update(Request $request, Project $project)
    {
        $request->validate([
            'name' => 'required',
            'client_id' => 'required|exists:clients,id',
            'hours_estimated' => 'required|integer',
        ]);
        $item = Project::find($request->get('id'));
        if ($item) {
            $type = $request->get('type');
            if ($type == "hours") {
                $desired_price_hour = $request->get('desired_price_hour');
                $total_price = $request->get('hours_estimated') * $desired_price_hour;
            } else {
                $desired_price_hour = 0;
                $total_price = $request->get('total_price');
                if ($total_price > 0) $desired_price_hour = $total_price / $request->get('hours_estimated');
            }
            $item->name = trim($request->get('name'));
            $item->client_id = $request->get('client_id');
            $item->type = $type;
            $item->hours_estimated = $request->get('hours_estimated');
            $item->total_price = $total_price;
            $item->desired_price_hour = $desired_price_hour;
            $item->save();
            return ResponseBuilder::success($item);
        }
        return ResponseBuilder::error(250);
    }
    public function destroy(Project $project)
    {
    }
    public function fetch()
    {
        $collection = [];
        foreach (Project::where('archived', 0)->orderBy('order', 'asc')->orderBy('name', 'asc')->get() as $item) {            
            array_push($collection, [
                'id' => $item->id,
                'name' => $item->name,
                'client' => $item->client->name,
                'total' => currency_format((string) $item->total),
                'balance' => currency_format((string) $item->balance),
                'hours_estimated' => $item->hours_estimated . 'h',
                'hours' => $item->hours . 'h',
                'desired_price_hour' => currency_format((string) $item->desired_price_hour),
                'price_hour' => $item->price_hour,
                'focus' => $item->focus,
                'order' => $item->order,
                'archived' => $item->archived,
                'type' => $item->type,
                'tasks_count' => $item->tasks()->count(),
            ]);
        }
        return ResponseBuilder::success($collection);
    }
    public function toggleFocus(Request $request)
    {
        $item = Project::find($request->id);
        if ($item) {
            if ($item->focus == 0) $item->focus = 1;
            else $item->focus = 0;
            $item->save();
            return ResponseBuilder::success();
        }
        return ResponseBuilder::error(ApiCode::SOMETHING_WENT_WRONG);
    }
    public function toggleArchive(Request $request)
    {
        $item = Project::find($request->id);
        if ($item) {
            if ($item->archived == 0) $item->archived = 1;
            else $item->archived = 0;
            $item->save();
            return ResponseBuilder::success();
        }
        return ResponseBuilder::error(ApiCode::SOMETHING_WENT_WRONG);
    }
    public function order(Request $request)
    {
        $order = 0;
        $data = $request->all();
        foreach ($data as $key => $value) {
            $item = Project::find($value[0]["id"]);
            if (!$item) return response()->json(false, 422);
            $item->order = $order;
            $item->save();
            $order++;
        }
        return ResponseBuilder::success();
    }
}
