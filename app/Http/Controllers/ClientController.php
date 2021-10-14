<?php
namespace App\Http\Controllers;
use App\Client;
use Illuminate\Http\Request;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder;
class ClientController extends Controller
{
    public function index()
    {
        $this->middleware('auth');
    }
    public function create()
    {
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);
        $item = new Client([
            'name' => trim($request->get('name')),
        ]);
        $item->save();
        return ResponseBuilder::success($item);
    }
    public function show(Client $client)
    {
        $item = Client::find($client->id);
        $collection = [
            'id' => $item->id,
            'name' => $item->name,
            'total' => currency_format((string) $item->total),
            'hours' => $item->hours . 'h',
            'price_hour' => $item->price_hour,
        ];
        return ResponseBuilder::success($collection);
    }
    public function edit(Client $client)
    {
    }
    public function update(Request $request, Client $client)
    {
    }
    public function destroy(Client $client)
    {
    }
    public function fetchForSelect()
    {
        $collection = [];
        foreach (Client::get() as $item) {
            array_push($collection, [
                'value' => $item->id,
                'text' => $item->name,
            ]);
        }
        return ResponseBuilder::success($collection);
    }
    public function fetch()
    {
        $collection = [];
        foreach (Client::get() as $item) {
            array_push($collection, [
                'id' => $item->id,
                'name' => $item->name,
                'total' => currency_format((string) $item->total),
                'hours' => $item->hours . 'h',
                'price_hour' => $item->price_hour,
            ]);
        }
        return ResponseBuilder::success($collection);
    }    
}
