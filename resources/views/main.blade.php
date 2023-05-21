@extends('layouts.tamplate')

@section('styles')@vite(['resources/scss/main.scss', 'resources/scss/market.scss'])@endsection
@section('scripts')@vite(['resources/react/market.jsx'])@endsection

@section('title-block')Главная @endsection

@section('search-pannel')


@endsection

@section('page_content')
<div class="container-fluid page-bg-bisquit mt-4 pt-4 pb-5">
  <div class="container">
    <div class="row justify-content-around text-center">
      <div class="col align-self-center">
        <h2>Спецшеринг — это сервис аренды спецтехники. Никакой платы за пользование сервисом или регистрацию, вы платите за часы аренды.</h2>
        <p>Зачем содержать свой парк, если можно иметь доступ к 7 000 единицам техники, которые не нужно обслуживать, заправлять, и держать в штате машиниста.</p>
      </div>
    </div>
    <div class="row justify-content-around pt-5 pb-5">
      <div class="col-3 align-self-center">
        <h1 class="lending_number border-bottom">100+</h1>
        <p>Единицы спецтехники доступны для аренды</p>
      </div>
      <div class="col-3 align-self-center">
        <h1 class="lending_number border-bottom">300+</h1>
        <p>Корпоративных клиентов заказывают технику в Спецшеринг</p>
      </div>
      <div class="col-3">
        <div class="row border-bottom">
          <div class="col-2">
            <h2 class="lending_number">6</h2>
          </div>
          <div class="col-8 align-self-center">
            <h5>Регионов присутствия сервиса</h5>
          </div>
        </div>
        <div class="row">
          <p>Брестская, Витебская, Гомельская, Гродненская, Могилёвская, Минская</p>
        </div>
      </div>
    </div>

    <div class="row justify-content-around text-center">
      <img class="w-75" src="{{asset('images/main/img-002.png')}}">
    </div>
  </div>
</div>
@endsection

@section('showcase')
<div class="container">
  <div class="row justify-content-around text-center">
    <h1 class="h1-special text-start mt-3">
      Каталог
    </h1>
  </div>

  <div class="row text-start" id="market">

  </div>
</div>
@endsection