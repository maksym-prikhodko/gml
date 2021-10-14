<?php
namespace App\Http\Controllers;
use MorningTrain\TogglApi\TogglApi;
class TogglController extends Controller
{
    public function timeEntries()
    {
        $toggl = new TogglApi(env('TOGGL_API_TOKEN'));
        $toggl->getTimeEntries();
        dd($toggl->getTimeEntries());
    }
}
