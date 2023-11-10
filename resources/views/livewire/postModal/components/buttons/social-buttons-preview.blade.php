<div class="flex flex-wrap justify-center">
    @foreach($buttons as $index => $button)
        <button
            wire:click="setClickedButtonIndex({{ $index }})"
            class="flex items-startrounded transition-opacity duration-300 {{ $clickedButtonIndex === $index ? 'opacity-50' : '' }} focus:outline-none"
        >
            <img src="{{ $button['image'] }}" alt="{{ $button['alt'] }}" class="w-5 h-5 mr-2">
        </button>
    @endforeach
</div>
