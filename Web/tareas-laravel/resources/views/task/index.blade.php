@extends('app')

@section('content')

    <div class="container w-25 border p-4 mt-4">

    <form action="{{ route('task') }}" method="POST">
      @csrf

      @if (session('success'))
      <h6 class="alert alert-success">{{ session('success') }}</h6>
        
      @endif

      @error('title')
      <h6 class="alert alert-danger">{{ $message }}</h6>
      @enderror
  <div class="mb-3">
    <label for="title">Task name</label>
    <input type="text" class="form-control" name="title">
    
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  <div>
      @foreach ($task as $showtask )
        <div class="row py-1">
          <div class="col-md-9 d-flex aling-items-center">
            <a href="{{ route('task-show', [$showtask->id]) }}">{{$showtask-> title}}</a>

          </div>
          <div class="col-md-3 d-flex justify-content-end">
            <form action="{{ route('task-destroy', [$showtask->id]) }}" method="POST">
              @method('DELETE')
              @csrf
              <button class="btn btn-danger btn-sm">Delete</button>
            </form>

          </div>


        </div>
        
      @endforeach
  </div>

    </div>

@endsection