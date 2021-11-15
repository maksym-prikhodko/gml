<?php
namespace App\Http\Controllers;
use App\ApiCode;
use App\Mit;
use Illuminate\Http\Request;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder;
class MitController extends Controller
{
    public function index()
    {
        $this->middleware('auth');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'day' => 'required|date',
        ]);
        $lastTask = Mit::where('day', $request->get('day'))->orderBy('order', 'desc')->first(['order']);
        if (!$lastTask) $order = 1; 
        else $order = $lastTask->order + 1;
        $item = new Mit([
            'name' => trim($request->get('name')),
            'day' => $request->get('day'),
            'order' => $order,
        ]);
        $item->save();
        return ResponseBuilder::success($item);
    }
    public function show(Mit $mit)
    {
        $item = Mit::find($mit->id);
        $collection = [
            'id' => $item->id,
            'name' => $item->name,
            'completed' => $item->completed,
            'day' => $item->due_date,
        ];
        return ResponseBuilder::success($collection);
    }
    public function edit(Mit $mit)
    {
    }
    public function update(Request $request, Mit $mit)
    {
    }
    public function destroy(Mit $mit)
    {
        $mit->delete();
        return ResponseBuilder::success();
    }
    public function toggleCompleted(Request $request)
    {
        $item = Mit::find($request->id);
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
            $item = Mit::find($value[0]["id"]);
            if (!$item) return response()->json(false, 422);
            $item->order = $order;
            $item->save();
            $order++;
        }
        return ResponseBuilder::success();
    }
}
