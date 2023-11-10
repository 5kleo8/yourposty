<div class="flex flex-col items-center sm:flex-row justify-end">

        <button
            wire:click="nextStep"
            class="w-36 bg-blackPrimary text-white  py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-4 flex items-center justify-center cursor-not-allowed opacity-20">
            <p class="buttonDesktop buttonMobile">Siguiente</p>
        </button>

    <button
        wire:click="prevStep"
        class="w-36 bg-white text-blackPrimary  py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-4 sm:order-first flex items-center justify-center">
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.853 5.41455H6.35298C5.63501 5.41455 5.05298 5.99658 5.05298 6.71455V13.2146C5.05298 13.9325 5.63501 14.5146 6.35298 14.5146H12.853C13.5709 14.5146 14.153 13.9325 14.153 13.2146V6.71455C14.153 5.99658 13.5709 5.41455 12.853 5.41455Z" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2.45308 10.6146C1.73808 10.6146 1.15308 10.0296 1.15308 9.31465V2.81465C1.15308 2.09965 1.73808 1.51465 2.45308 1.51465H8.95308C9.66808 1.51465 10.2531 2.09965 10.2531 2.81465" stroke="#232323" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p class="buttonDesktop buttonMobile ml-2">Copiar</p>
    </button>


        <button
            wire:click="prevStep"
            class="w-36 bg-white text-blackPrimary border border-blackPrimary hover:border-bluePrimary  py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-4 sm:order-first flex items-center justify-center">
            <p class="buttonDesktop buttonMobile">Volver</p>
        </button>



</div>
