<div class="mx-16">
    <div class="text-center mb-6">
        <h1 class="p-4">¡Customer, vamos a crear tu cuenta!</h1>
        <p class=" px-10 mb-2 md:pt-4 md:mb-12">Elige tu perfil para empezar a utilizar la plataforma.</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-14">
        <button
            class="px-6 py-6 md:px-12 md:py-2 text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg sm:whitespace-normal whitespace-nowrap flex flex-col items-center"
            wire:click="selectOption">
            <img src="{{ asset('img/tipo-19.svg') }}" class="mb-2 mx-auto md:pt-6 h-20 md:w-28 md:h-28">
            <p class="text-center fonts desktopfonts md:py-4 md:">Autónomo/<br>Empresa</p>
        </button>

        <button
            class="px-6 py-6 md:px-12 md:py-2 text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg sm:whitespace-normal whitespace-nowrap flex flex-col items-center"
            wire:click="selectOption">
            <img src="{{ asset('img/tipo-18.svg') }}" class="mb-2 mx-auto md:pt-6  h-20 md:w-28 md:h-28">
            <p class="text-center fonts desktopfonts md:py-4 md:">Community /</br> Manager</p>
        </button>
        <button
            class="px-6 py-6 md:px-12 md:py-2 text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg sm:whitespace-normal whitespace-nowrap flex flex-col items-center"
            wire:click="selectOption">
            <img src="{{ asset('img/tipo-16.svg') }}" class="mb-2 mx-auto md:pt-6  h-20 md:w-28 md:h-28">
            <p class="text-center fonts desktopfonts md:py-4 md:">Agencia</p>
        </button>
        <button
            class="px-6 py-6 md:px-12 md:py-2 text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg sm:whitespace-normal whitespace-nowrap flex flex-col items-center"
            wire:click="selectOption">
            <img src="{{ asset('img/tipo-17.svg') }}" class="mb-2 mx-auto md:pt-6  h-20 md:w-28 md:h-28">
            <p class="text-center fonts desktopfonts md:py-4 md:">Otro</p>
        </button>

    </div>
</div>










