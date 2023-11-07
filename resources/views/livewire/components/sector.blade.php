<div class="px-6">
    <h2 class="md:text-3xl  text-center mb-6">¿A qué sector pertenece tu empresa?</h2>
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <button
            class="text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto mt-4 mb-2 p-4 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-10.svg') }}" class="w-12 h-12 mx-auto mb-2">
            <p class="text-sm font-normal">
                Tiendas, comercio y bienes físicos
            </p>
            <p class="text-sm font-normal hidden md:block">
                Productos materiales, ropa, regalos, artículos para mascotas, lencería, droguería, etc.
            </p>
        </button>
        <button
            class="text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto mt-4 mb-2 p-4 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-11.svg') }}" class="mt-6 mx-auto">
            <p class="text-center font-normal">
                Ciencia, tecnología e ingenieria
            </p>
            <p class="text-sm font-normal hidden md:block">
                Productos digitales, diseño web, ecommerce, plataformas online, robótica, etc
            </p>
        </button>
        <button
            class="text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto mt-4 mb-2 p-4 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-12.svg') }}" class="mt-6 mx-auto">
            <p class="text-center font-normal">
                Construcción e industria
            </p>
            <p class="text-sm font-normal hidden md:block">
                Construcción, alquiler de maquinaria, obras materiales, domotica, instalaciones, etc.
            </p>
        </button>
        <button
            class="text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto mt-4 mb-2 p-4 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-14.svg') }}" class="mt-6 mx-auto">
            <p class="text-center font-normal">
                Ocio y turismo
            </p>
            <p class="text-sm font-normal hidden md:block">
                Restaurante, bar, spa, turismo, alojamiento, comida, agencia de viajes, etc.
            </p>
        </button>
        <button
            class="text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto mt-4 mb-2 p-4 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-13.svg') }}" class="mt-6 mx-auto">
            <p class="text-center font-normal">
                Servicios profesionales
            </p>
            <p class="text-sm font-normal hidden md:block">
                Electricidad, fontanería, transporte, abogado, publicidad, inmobiliaria, jardineria, etc.
            </p>
        </button>
        <button
            class="text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto mt-4 mb-2 p-4 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-15.svg') }}" class="mt-6 mx-auto">
            <p class="text-center font-normal ">
                Medicina, salud y belleza
            </p>
            <p class="text-sm font-normal hidden md:block">
                Clinica dental, clinica médica, podologia, salón de belleza, peluquería, óptica, etc.
            </p>
        </button>
    </div>
    <div class="mt-6">
        <livewire:text-input
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-bluePrimary resize"
            label=""
            :placeholder="'Otro'"
            :maxInputLength="50"
            :additionalText="'caracteres'"
            :value="$sector"
            model="sector"
        />
    </div>
    <div class="mt-12">
        <livewire:navigation-button :showNext="$sector >= 5" wire:key="{{ now() }}"/>
    </div>
</div>


