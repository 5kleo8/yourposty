<div class="px-16">
    <div class="text-center mb-6">
        <h2 class="p-4">¡Customer, vamos a crear tu cuenta!</h2>
        <p class=" px-10 mb-2">Elige tu perfil para empezar a utilizar la plataforma.</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <button
            class="px-4 py-6 text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg sm:whitespace-normal whitespace-nowrap flex flex-col items-center"
            wire:click="selectOption">
            <img src="{{ asset('img/tipo-19.svg') }}" class="mb-2 mx-auto h-20">
            <p class="text-center fonts">Autónomo/<br>Empresa</p>
        </button>
        <button
            class="px-4 py-6 text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg sm:whitespace-normal whitespace-nowrap flex flex-col items-center"
            wire:click="selectOption">
            <img src="{{ asset('img/tipo-18.svg') }}" class="mb-2 mx-auto h-20">
            <p class="text-center fonts">Community /</br> Manager</p>
        </button>
        <button
            class="px-4 py-6 text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg sm:whitespace-normal whitespace-nowrap flex flex-col items-center"
            wire:click="selectOption">
            <img src="{{ asset('img/tipo-16.svg') }}" class="mb-2 mx-auto h-20">
            <p class="text-center fonts">Agencia</p>
        </button>
        <button
            class="px-4 py-6 text-center border-2 border-gray-300 hover:border-blackPrimary focus:outline-none focus:border-bluePrimary transition duration-300 rounded-lg sm:whitespace-normal whitespace-nowrap flex flex-col items-center"
            wire:click="selectOption">
            <img src="{{ asset('img/tipo-17.svg') }}" class="mb-2 mx-auto h-20">
            <p class="text-center fonts">Otro</p>
        </button>
    </div>
</div>










