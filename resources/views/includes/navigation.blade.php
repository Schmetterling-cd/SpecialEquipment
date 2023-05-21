@section('nav-bar')
  <header class="d-flex flex-wrap justify-content-center py-3">
    <a href="/" class="d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none">
      <img src="{{asset('images/label.svg')}}" style="width: 50px; height: 50px;">
      <span class="fs-4">Спецшеринг</span>
    </a>

    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link link-secondary" href="/">Главная</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link-secondary" href="/help">Помощь</a>
      </li>
      <li class="nav-item">
        <a class="nav-link link-secondary" href="/contacts">Контакты</a>
      </li>
      <li class="nav-item">
        @show
      </li>
    </ul>
  </header>