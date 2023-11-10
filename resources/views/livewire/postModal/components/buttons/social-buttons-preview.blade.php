<div class="grid grid-cols- md:flex flex-wrap justify-start items-start">
    @foreach($buttons as $index => $button)
        <button
            wire:click="setClickedButtonIndex({{ $index }})"
            class="flex items-start  md:px-2 md:py-1 mx-2.5 my-1.5 rounded transition-opacity duration-300 {{ $clickedButtonIndex === $index ? 'opacity-50' : '' }} focus:outline-none"
        >
            <img src="{{ $button['image'] }}" alt="{{ $button['alt'] }}" class="w-5 h-5 mr-2">
        </button>
    @endforeach
</div>
