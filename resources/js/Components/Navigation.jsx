import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import React from 'react';
import Dropdown from '@/Components/Dropdown';

class Navigation extends React.Component {
    render() {
        return (<>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3">
                    <Link href={route('login')} className="d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none">
                        <ApplicationLogo></ApplicationLogo>
                        <span className="fs-4">Спецшеринг</span>
                    </Link>

                    <ul className="nav">
                        <li className='sm:flex sm:items-center'>
                            <Link className="nav-item nav-link link-secondary"
                                href={route('main')}>Главная
                            </Link>
                        </li>
                        <li className='sm:flex sm:items-center'>
                            <Link
                                href={route('market')}
                                className="nav-item nav-link link-secondary"
                            >
                                Каталог
                            </Link>
                        </li>
                        <li className='sm:flex sm:items-center'>
                            <Link
                                href={route('contacts')}
                                className="nav-item nav-link link-secondary"
                            >
                                Контакты
                            </Link>
                        </li>
                        {this.props.user ? (
                            <>
                                <li className='nav-item nav-link '>
                                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                                        <div className="relative">
                                            <Dropdown>
                                                <Dropdown.Trigger>
                                                    <span className="inline-flex rounded-md">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                        >
                                                            {this.props.user.name}

                                                            <svg
                                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </span>
                                                </Dropdown.Trigger>

                                                <Dropdown.Content>
                                                    <Dropdown.Link href={route('profile.edit')}>Профиль</Dropdown.Link>
                                                    <Dropdown.Link href={route('add-equipment')}>Добавить технику</Dropdown.Link>
                                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                                        Выход
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </li>
                            </>


                        ) : (
                            <>
                                <li className='nav-item ml-3'>
                                    <Link
                                        role="button"
                                        href={route('login')}
                                        className="btn btn-warning"
                                    >
                                        Вход
                                    </Link>
                                </li>

                                <li className='nav-item ml-3'>
                                    <Link
                                        role="button"
                                        href={route('register')}
                                        className="btn btn-outline-dark"
                                    >
                                        Регистрация
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </header>
            </div>
        </>);
    }
}

// export default function Navigation() {
//     return (

//     );
// }

export default Navigation
