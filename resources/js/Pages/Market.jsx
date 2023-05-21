import { Head } from '@inertiajs/react';
import React from "react";
import Navigation from '@/Components/Navigation.jsx';
import Footer from '@/Components/Footer.jsx';
import * as ReactDOMClient from "react-dom/client";
import ShowCase from '../Components/Showcase.jsx';
import '../../scss/market.scss'
import axios from 'axios';

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


export default function Market({ auth, get }) {

    //const a = axios.get('/api/user');

    return (
        <>
            
            <Navigation user={auth.user}></Navigation>
            <Head title="Доска" />
            <div className="container-fluid page-bg-bisquit">
            {/* <p>{{a}}</p> */}
                <div className="container">
                    <div className="w-100 row align-items-center mb-3">
                        <div className="col-12">
                            <h1 className="h1-special">Каталог</h1>
                        </div>
                    </div>

                    <div className="w-100 row align-items-center pb-3">
                        <div className="col-4">
                            <div className="input-group input-group-lg">
                                <input type="text" className="form-control-lg w-100 inp" placeholder="Поиск" />
                            </div>
                        </div>
                    </div>
                    <div className="w-100 row align-items-center pb-3">
                        <div className="col-4" id="button">
                            <button type="button" className="btn btn-warning btn-lg mr-2">Поиск</button>
                            <button type="button" className="btn btn-dark btn-lg mr-2">Фильтры</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid page-bg-bisquit">
                <div className="container">
                    <ShowCase products={prod} />
                </div>


                <div className="container page-bg-bisquit">
                    <div className="row justify-content-end">
                        <div className="col-2">
                            <div className="btn-group me-2 btn-group-lg" role="group" aria-label="Second group">
                                <button type="button" className="btn btn-secondary">1</button>
                                <button type="button" className="btn btn-secondary">2</button>
                                <button type="button" className="btn btn-secondary">3</button>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-group input-group-lg w-50">
                                <select className="form-select" id="inputGroupSelect01">
                                    <option value="1">20</option>
                                    <option value="2">40</option>
                                    <option value="3">60</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <Footer></Footer>
            {/* </AuthenticatedLayout> */}
        </>
    );
}
