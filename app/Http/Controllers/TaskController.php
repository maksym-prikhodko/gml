<?php
namespace App\Http\Controllers;
use App\ApiCode;
use App\Task;
use Illuminate\Http\Request;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder;
class TaskController extends Controller
{
    public function index()
    {
        $this->middleware('auth');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);
        $lastTask = Task::where('project_id', $request->get('project_id'))->orderBy('order', 'desc')->first(['order']);
        if (!$lastTask) $order = 1; 
        else $order = $lastTask->order + 1;
        $item = new Task([
            'name' => trim($request->get('name')),
            'project_id' => $request->get('project_id'),
            'order' => $order,
        ]);
        $item->save();
        return ResponseBuilder::success($item);
    }
    public function show(Task $task)
    {
        $item = Task::find($task->id);
        $collection = [
            'id' => $item->id,
            'name' => $item->name,
            'desc' => $item->desc,
            'focus' => $item->focus,
            'completed' => $item->completed,
            'due_date' => $item->due_date,
            'inbox' => $item->inbox,
            'order' => $item->order,
        ];
        return ResponseBuilder::success($collection);
    }
    public function edit(Task $task)
    {
    }
    public function update(Request $request, Task $task)
    {
    }
    public function destroy(Task $task)
    {
    }
    public function fetch(Request $request)
    {
        $collection = [];
        foreach (Task::where('project_id', $request->projectId)->orderBy('order', 'asc')->orderBy('name', 'asc')->get() as $item) {
            array_push($collection, [
                'id' => $item->id,
                'name' => $item->name,
                'desc' => $item->desc,
                'focus' => $item->focus,
                'completed' => $item->completed,
                'due_date' => $item->due_date,
                'inbox' => $item->inbox,
                'order' => $item->order,
            ]);
        }
        return ResponseBuilder::success($collection);
    }
    public function toggleFocus(Request $request)
    {
        $item = Task::find($request->id);
        if ($item) {
            if ($item->focus == 0) $item->focus = 1;
            else $item->focus = 0;
            $item->save();
            return ResponseBuilder::success();
        }
        return ResponseBuilder::error(ApiCode::SOMETHING_WENT_WRONG);
    }
    public function toggleCompleted(Request $request)
    {
        $item = Task::find($request->id);
        if ($item) {
            if ($item->completed == 0) $item->completed = 1;
            else $item->completed = 0;
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
            $item = Task::find($value[0]["id"]);
            if (!$item) return response()->json(false, 422);
            $item->order = $order;
            $item->save();
            $order++;
        }
        return ResponseBuilder::success();
    }
}
