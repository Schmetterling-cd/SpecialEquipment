import { Link, Head } from '@inertiajs/react';
import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';
import '../../scss/main.scss'
import ShowCase from '@/Components/Showcase';
import img_001 from '../../../public/images/main/img-001.jpg'
import img_002 from '../../../public/images/main/img-002.png'

const prod = [
    {
        id: 1,
        name: "Экскаватор",
        coast: "900",
        photo: "images/market/img-001.jpg"
    },
    {
        id: 2,
        name: "Погрузчик",
        coast: "700",
        photo: "images/market/img-002.png"
    },
    {
        id: 3,
        name: "Погрузчик",
        coast: "700",
        photo: "images/market/img-002.png"
    },
    {
        id: 4,
        name: "Погрузчик",
        coast: "700",
        photo: "images/market/img-002.png"
    },
    {
        id: 5,
        name: "Погрузчик",
        coast: "700",
        photo: "images/market/img-002.png"
    },
    {
        id: 6,
        name: "Погрузчик",
        coast: "700",
        photo: "images/market/img-002.png"
    },
    {
        id: 7,
        name: "Погрузчик",
        coast: "700",
        photo: "images/market/img-002.png"
    }, {
        id: 8,
        name: "Погрузчик",
        coast: "700",
        photo: "images/market/img-002.png"
    },
    {
        id: 9,
        name: "Погрузчик",
        coast: "700",
        photo: "images/market/img-002.png"
    },
];

export default function Main({ auth }) {
    return (
        <>
            <Head title="Главная" />
            <Navigation user={auth.user}></Navigation>
            <div className="container">
                <div class="w-100 row align-items-center">
                    <div class="col-8 h-75">
                        <h1 class="h1-special w-75">Сервис аренды спецтехники</h1>
                        <p class="w-50 pt-4 pb-4">Надёжный и простой способ горячей аренды всех видов спецтехники и самосвалов</p>
                        <a role="button" href="/market" class="btn btn-warning">Заказать технику</a>
                    </div>
                    <div class="col-4">
                        <img class="rounded" src={img_001} />
                    </div>
                </div>
            </div>

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
                        <img class="w-75" src={img_002} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="w-100 row align-items-center mb-3">
                    <div className="col-12">
                        <h1 className="h1-special">Каталог</h1>
                    </div>
                </div>
                <ShowCase products={prod} />
            </div>
            <Footer />
        </>
    );
}
