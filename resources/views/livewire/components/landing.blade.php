<div class="p-6 sm:p-6">
    <div class="text-center mb-6">
        <h2 class="font-bold text-4xl">¡Customer, vamos a crear tu cuenta!</h2>
        <p class="text-lg">Elige tu perfil para empezar a utilizar la plataforma.</p>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg sm:whitespace-normal whitespace-nowrap" wire:click="selectOption">
            <img src="{{ asset('img/tipo-19.svg') }}" class="mb-4 mx-auto">
        <p class="text-center font-normal pb-6">Autónomo /</br>Empresa</p>
    </div>
    <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg" wire:click="selectOption">
        <img src="{{ asset('img/tipo-18.svg') }}" class="mb-4 mx-auto">
        <p class="text-center font-normal pb-6">Community Manager</p>
    </div>
    <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg" wire:click="selectOption">
        <img src="{{ asset('img/tipo-16.svg') }}" class="mb-4 mx-auto">
        <p class="text-center font-normal pb-6">Agencia</p>
    </div>
    <div class="p-4 text-center border border-gray-300 hover:border-bluePrimary transition duration-300 rounded-lg" wire:click="selectOption">
        <img src="{{ asset('img/tipo-17.svg') }}" class="mb-4 mx-auto">
        <p class="text-center font-normal pb-6">Otro</p>
    </div>
</div>

</div>









