<div class="flex flex-col items-center sm:flex-row justify-between">
    @if($showPrev)
        <button
            wire:click="prevStep"
            class="w-full bg-white text-blackPrimary border border-blackPrimary font-bold py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-2"
        >
            Volver
        </button>
    @endif

    @if($showNext)
        <button
            wire:click="nextStep"
            class="w-full bg-blackPrimary text-white font-bold py-2 px-4 rounded {{ $nextDisabled ? 'cursor-not-allowed opacity-50' : '' }}"
        >
            Siguiente
        </button>
    @else
        <div class="w-full"></div>
    @endif
</div>
