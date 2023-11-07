<div class="mx-16">
    <h2 class="mb-3.5 text-center mx-auto">¿A qué sector pertenece tu empresa?</h2>
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-3 ">
        <button
            class=" py-3 text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto  mb-1 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-10.svg') }}" class="md:w-12 md:h-12 h-7 w-7 mx-auto  md:mb-2">
            <p class=" fonts">
                Tiendas, comercio y bienes físicos
            </p>
            <p class=" font-normal hidden md:block text-grayPrimary md:mt-3 md:mx-5 desktopfonts ">
                Productos materiales, ropa, regalos, artículos para mascotas, lencería, droguería, etc.
            </p>
        </button>

        <button
            class="text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto  mb-1 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-11.svg') }}" class="md:w-12 md:h-12 h-7 w-7 mx-auto mt-px md:mb-2">
            <p class="text-center fonts">
                Ciencia, tecnología e ingenieria
            </p>
            <p class=" font-normal hidden md:block text-grayPrimary md:mt-3 md:mx-5 desktopfonts ">
                Productos digitales, diseño web, ecommerce, plataformas online, robótica, etc
            </p>
        </button>
        <button
            class=" py-5  text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto  mb-1 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-12.svg') }}" class="md:w-12 md:h-12 h-7 w-7 mx-auto mt-px md:mb-2">
            <p class="text-center fonts">
                Construcción e industria
            </p>
            <p class=" font-normal hidden md:block text-grayPrimary md:mt-3 md:mx-5 desktopfonts ">
                Construcción, alquiler de maquinaria, obras materiales, domotica, instalaciones, etc.
            </p>
        </button>
        <button
            class=" py-2 text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto  mb-1 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-14.svg') }}" class="md:w-12 md:h-12 h-7 w-7 mx-auto mt-px md:mb-2">
            <p class="text-center fonts">
                Ocio y turismo
            </p>
            <p class=" font-normal hidden md:block text-grayPrimary md:mt-3 md:mx-5 desktopfonts ">
                Restaurante, bar, spa, turismo, alojamiento, comida, agencia de viajes, etc.
            </p>
        </button>
        <button
            class=" py-5 text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto  mb-1 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-13.svg') }}" class="md:w-12 md:h-12 h-7 w-7 mx-auto mt-px md:mb-2">
            <p class="text-center fonts">
                Servicios profesionales
            </p>
            <p class=" font-normal hidden md:block text-grayPrimary md:mt-3 md:mx-5 desktopfonts  ">
                Electricidad, fontanería, transporte, abogado, publicidad, inmobiliaria, jardineria, etc.
            </p>
        </button>
        <button
            class=" py-2  text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg max-w-xs mx-auto  mb-1 w-full"
            wire:click="selectOption"
        >
            <img src="{{ asset('img/Perfil-15.svg') }}" class="md:w-12 md:h-12 h-7 w-7 mx-auto mt-px md:mb-2">
            <p class="text-center fonts">
                Medicina, salud y belleza
            </p>
            <p class=" font-normal hidden md:block text-grayPrimary md:mt-3 md:mx-5 desktopfonts ">
                Clinica dental, clinica médica, podologia, salón de belleza, peluquería, óptica, etc.
            </p>
        </button>
    </div>
    <div class="mt-6">
        <livewire:text-input
            class="border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-bluePrimary resize"
            label=""
            :placeholder="'Otro'"
            :maxInputLength="50"
            :additionalText="'caracteres'"
            :value="$sector"
            model="sector"
        />
    </div>
    <div class="md:mb-12 md:mt-6">
        <livewire:navigation-button :showNext="$sector >= 5" wire:key="{{ now() }}"/>
    </div>
</div>


