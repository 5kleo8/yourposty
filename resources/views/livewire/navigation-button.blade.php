<div class="flex flex-col items-center sm:flex-row justify-between">
    @if($showNext)
        <button
            wire:click="nextStep"
            class="w-full bg-blackPrimary text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2 flex items-center justify-center {{ $nextDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-bluePrimary' }}">
            <p class="text-center">Siguiente</p>
            <svg class="w-6 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd">
                </path>
            </svg>
        </button>
    @else
        <div class="w-full"></div>
    @endif

    @if($showPrev)
        <button
            wire:click="prevStep"
            class="w-full bg-white text-blackPrimary border border-blackPrimary hover:border-bluePrimary font-bold py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-2 sm:order-first flex items-center justify-center">
            <svg class="w-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd">
                </path>
            </svg>
            <p class="text-center">Volver</p>
        </button>
    @endif


</div>

