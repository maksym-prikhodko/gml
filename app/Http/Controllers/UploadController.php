<?php
namespace App\Http\Controllers;
use App\Task;
use Illuminate\Http\Request;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder;
use MediaUploader;
use Plank\Mediable\Media;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
class UploadController extends Controller
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
    }
    public function show($id)
    {
    }
    public function edit($id)
    {
    }
    public function update(Request $request, $id)
    {
    }
    public function destroy($id)
    {
    }
    public function uploadFiles(Request $request, $taskId)
    {
        $item = Task::find($taskId);
        if ($item) {
            foreach ($request->files as $file) {
                $fName = $file->getClientOriginalName();
                $nameFinal = Str::slug(pathinfo($fName, PATHINFO_FILENAME), '-');
                $media = MediaUploader::fromSource($file)
                    ->useFilename($nameFinal)
                    ->toDestination('do_spaces', 'genomada-taskfiles/' . Auth::id() . '/' . $item->id)
                    ->upload();
                $item->attachMedia($media, ['taskfile']);
            }
            return ResponseBuilder::success();
        }
        return ResponseBuilder::error(250);
    }
    public function fetchFile(Request $request, $mediableId, $mediaId)
    {
        $task = Task::find($mediableId);
        if (!$task) return response()->json(null, 422);
        $media = Media::find($mediaId);
        $filename = $media->directory . '/' . $media->filename . '.' . $media->extension;
        if (Storage::disk('do_spaces')->exists($filename)) {
            return Storage::disk('do_spaces')->download($filename);
        }
        return ResponseBuilder::error(250);
    }
    public function fetchFileShowImage(Request $request, $mediableId, $mediaId)
    {
        $task = Task::find($mediableId);
        if (!$task) return response()->json(null, 422);
        $media = Media::find($mediaId);
        $filename = $media->directory . '/' . $media->filename . '.' . $media->extension;
        if (Storage::disk('do_spaces')->exists($filename)) {
            return Storage::disk('do_spaces')->get($filename);
        }
        return ResponseBuilder::error(250);
    }
    public function deleteFile(Request $request)
    {
        $media = Media::find($request->id);
        $media->forceDelete();
        return ResponseBuilder::success();
    }
}
