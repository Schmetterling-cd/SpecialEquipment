import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';
import TextArea from '@/Components/TextArea';
import { Head } from '@inertiajs/react';
import '../../scss/app.scss';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';


export default function Contacts({ auth }, ) {
    return (<>

        <Head title="Контакты" />
        <Navigation user={auth.user}></Navigation>

        <div className="container-fluid page-bg-bisquit">

            <div className="container pt-5 pb-5">
                <div className="w-100 row align-items-center mb-3">
                    <div className="col-12">
                        <h1 className="h1-special">Контакты</h1>
                    </div>
                </div>

                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg mb-3">
                    <div className="space-y-2">

                        <h2>Контактная информация</h2>

                        <p className="fw-bold">Общество с ограниченной ответственностью "Вальб и К"</p>
                        <p className="fw-bold">Холдинг MegaHolod ltd.</p>
                        <p className="fw-bold">Юр. адрес:</p>
                        <p>Гомельская обл., г. Гомель, ул. Могилевская, д. 27</p>
                        <p className="fw-bold">УНП</p>
                        <p>491339000</p>
                        <p className="fw-bold">Приёмная</p>
                        <p>+375 232 26-46-08</p>

                    </div>
                </div>

                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">

                    <h2>Обратная связь</h2>

                    <form className="mt-6 space-y-6">
                        <div>
                            <InputLabel htmlFor="name" value="Имя" />

                            <TextInput
                                id='name'
                                className="mt-1 block w-full"
                            />

                            <InputError />
                        </div>

                        <div>
                            <InputLabel htmlFor="mail" value="Почта" />

                            <TextInput
                                id='mail'
                                className="mt-1 block w-full"
                            />

                            <InputError />
                        </div>

                        <div className='pb-3' style={{ height: '200px' }}>
                            <InputLabel htmlFor="message" value="Ваш вопрос" />

                            <TextArea
                                id='mail'
                                className="mt-1 block w-full"
                                rows="6"
                                maxLength="815"
                            />

                            <InputError />
                        </div>

                        <div className="flex items-center gap-4">
                            <PrimaryButton >Отправить</PrimaryButton>

                            {/* <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition> */}
                        </div>
                    </form>
                </div>
            </div>



        </div>

        <Footer />
    </>)
}