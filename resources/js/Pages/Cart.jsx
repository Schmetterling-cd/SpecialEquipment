import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Navigation from '@/Components/Navigation';
import Footer from '@/Components/Footer';
import TextArea from '@/Components/TextArea';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../../scss/app.scss';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';


export default function Cart({ auth }) {
    return (<>

        <Head title="Корзина" />
        <Authenticated>

        <div className="container-fluid page-bg-bisquit">

            <div className="container pt-5 pb-5">
        
            </div>
        </div>
        </Authenticated>
    </>)
}