<div class="lg:pr-64 lg:pl-64 pa-24 p-6 sm:p-6">
    <div class="text-center mb-6">
        <h2 class="font-bold text-4xl">¿A qué sector pertenece tu empresa?</h2>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div wire:click="setActive(0)"
             class="text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg cursor-pointer
            {{ $activeElement === 0 ? 'bg-bluePrimary text-white' : '' }}">
            <img src="{{ asset('img/Perfil-10.svg') }}" class="mt-6 mx-auto">
            <p class="text-center font-normal pb-2">
                Tiendas, comercio y bienes físicos
            </p>
            <p class="text-center text-xs font-normal pb-2">
                Productos materiales, ropa, regalos, articulos para mascotas, lencería, droguería, etc.
            </p>
        </div>
        <div wire:click="setActive(1)"
             class="text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg cursor-pointer
            {{ $activeElement === 1 ? 'bg-bluePrimary text-white' : '' }}">
            <img src="{{ asset('img/Perfil-11.svg') }}" class="mt-6 mx-auto">
            <p class="text-center font-normal pb-2">
                Ciencia, tecnología e ingenieria
            </p>
            <p class="text-center text-xs font-normal pb-2">
                Productos digitales, diseño web, ecommerce, plataformas online, robótica, etc
            </p>
        </div>
        <div wire:click="setActive(2)"
             class="text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg cursor-pointer
            {{ $activeElement === 2 ? 'bg-bluePrimary text-white' : '' }}">
            <img src="{{ asset('img/Perfil-12.svg') }}" class="mt-6 mx-auto">
            <p class="text-center font-normal pb-2">
                Construcción e industria
            </p>
            <p class="text-center text-xs font-normal pb-2">
                Construcción, alquiler de maquinaria, obras materiales, domotica, instalaciones, etc.
            </p>
        </div>
        <div wire:click="setActive(3)"
             class="text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg cursor-pointer
            {{ $activeElement === 3 ? 'bg-bluePrimary text-white' : '' }}">
            <img src="{{ asset('img/Perfil-14.svg') }}" class="mt-6 mx-auto">
            <p class="text-center font-normal pb-2">
                Ocio y turismo
            </p>
            <p class="text-center text-xs font-normal pb-2">
                Restaurante, bar, spa, turismo, alojamiento, comida, agencia de viajes, etc.
            </p>
        </div>
        <div wire:click="setActive(4)"
             class="text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg cursor-pointer
            {{ $activeElement === 4 ? 'bg-bluePrimary text-white' : '' }}">
            <img src="{{ asset('img/Perfil-13.svg') }}" class="mt-6 mx-auto">
            <p class="text-center font-normal pb-2">
                Servicios profesionales
            </p>
            <p class="text-center text-xs font-normal pb-2">
                Electricidad, fontanería, transporte, abogado, publicidad, inmobiliaria, jardineria, etc.
            </p>
        </div>
        <div wire:click="setActive(5)"
             class="text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg cursor-pointer
            {{ $activeElement === 5 ? 'bg-bluePrimary text-white' : '' }}">
            <img src="{{ asset('img/Perfil-15.svg') }}" class="mt-6 mx-auto">
            <p class="text-center font-normal  pb-2">
                Medicina, salud y belleza
            </p>
            <p class="text-center text-xs font-normal pb-2">
                Clinica dental, clinica médica, podologia, salón de belleza, peluquería, óptica, etc.
            </p>
        </div>
    </div>
    <div class="mt-6">
        <input
            type="text"
            wire:model="newChip"
            wire:keydown.enter="addChip"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-bluePrimary resize"
            placeholder="Otro"
        >
    </div>

    <div class="mt-2 flex flex-wrap">
        @foreach($chips as $index => $chip)
            <div class="bg-bluePrimary text-white rounded-full px-3 py-1 m-1">
                {{ $chip }}
            </div>
            <button wire:click="removeChip({{ $index }})" class="ml-2 focus:outline-none">
                x
            </button>
        @endforeach
    </div>
    <div class="mt-12">
        <livewire:navigation-button :showNext="$activeElement || count($chips) > 0" wire:key="{{ now() }}"/>
    </div>


</div>


