import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FileInput from '@/Components/FileInput';
import React from 'react';
import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';
import TextArea from '@/Components/TextArea';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../../scss/app.scss';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import axios from 'axios';


export default function AddEquipment({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        user_id: '',
        coast: 0,
        photo: null,
        type_name: '',
    });

    let fileInput = React.createRef();

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', fileInput.current.files[0]);
        //data.photo = formData;
        let wjb = fileInput.current.files[0];
        axios.post(route('store-equipment'), formData, {
            headers: {
                'Content-Type': 'multipart/form-data; charset=utf-8'
            }
        }).then((response) => { console.log(response) });
    };

    return (<>

        <Head title="Добавление техники" />
        <Authenticated>

            <div className="container-fluid page-bg-bisquit">

                <div className="container pt-5 pb-5">
                    <h2>Добавление техники</h2>
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <form className="space-y-6" onSubmit={submit} encType='multipart/form-data'>
                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        <InputLabel htmlFor="name" value="Имя" />

                                        <TextInput
                                            id="phnameoto"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('name', e.target.value)}
                                        />

                                        <InputError message={errors.name} className="mt-2" />
                                    </div>

                                    <div>
                                        <InputLabel htmlFor="type_name" value="Тип" />

                                        <TextInput
                                            id="type_name"
                                            name="type_name"
                                            value={data.type_name}
                                            className="mt-1 block w-full"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('type_name', e.target.value)}
                                        />

                                        <InputError message={errors.type_name} className="mt-2" />
                                    </div>

                                    <div className='pb-3'>
                                        <InputLabel htmlFor="coast" value="Стоимость" />

                                        <TextInput
                                            id="coast"
                                            name="coast"
                                            value={data.coast}
                                            className="mt-1 block w-full"
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('coast', e.target.value)}
                                        />

                                        <InputError message={errors.coast} className="mt-2" />
                                    </div>

                                    <div className='pb-3'>
                                        <InputLabel htmlFor="photo" value="Фото" />

                                        <FileInput
                                            id="photo"
                                            name="photo"
                                            className="mt-1 block w-full"
                                            autoComplete="username"
                                            isFocused={true}
                                            ref={fileInput}
                                        />

                                        <InputError message={errors.photo} className="mt-2" />
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
                                </div>
                                <div className="col-6">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Характеристика</th>
                                                <th scope="col">Значение</th>
                                                <th scope="col">Действия</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Mark</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>Jacob</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td colspan="2">Larry the Bird</td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    </>)
}