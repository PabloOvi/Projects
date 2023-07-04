<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TasksController extends Controller
{
    //Create new tasks

    public function store(Request $request){

        $request -> validate([
            'title'=> 'required|min:3'
        ]);

        $task = new Task;
        $task->title = $request->title;
        $task->save();

        return redirect()->route('task')->with('success', 'Task created!');

    }

    public function index(){
        $task = Task::all();
        
        return view('task.index', ['task' => $task]);
    }

    public function show($id){
        $task = Task::find($id);
        
        return view('task.show', ['task' => $task]);
    }

    public function update(Request $request, $id){
        $task = Task::find($id);
        $task->title = $request->title;
        $task->save();
        
        return redirect()->route('task')->with('success', 'Task updated');
    }

    public function destroy($id){
        $task = Task::find($id);
        $task->delete();
        
        return redirect()->route('task')->with('success', 'Task deleted!');
    }
}
