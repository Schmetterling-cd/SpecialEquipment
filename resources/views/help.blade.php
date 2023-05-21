@extends('layouts.tamplate')

@section('styles')@vite(['resources/scss/help.scss'])@endsection

@section('title-block')Помощь @endsection

@section('search-pannel')
<div class="w-100 row align-items-center">
    <div class="col-12">
        <h1 class="h1-special">Помощь</h1>
    </div>
</div>
<div class="w-100 row align-items-center">
    <div class="col-12">
        <h1 class="h2 text-secondary">Задайте вопросы или закажите обратный звонок</h1>
    </div>
</div>
@endsection

@section('page_content')
<div class="container">
    <div class="col-6">
        <div class="input-group">
            <span class="input-group-text">Ваш вопрос</span>
            <textarea class="form-control" aria-label="With textarea" rows="10"></textarea>
        </div>
    </div>
</div>
@endsection