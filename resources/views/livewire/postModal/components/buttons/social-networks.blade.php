<div class="grid grid-cols-2 md:flex flex-wrap justify-start items-start max-w-full">
    @foreach($buttons as $index => $button)
        <button
            wire:click="setClickedButtonIndex({{ $index }})"
            class="flex items-start backgroundButton fontSocial md:px-2 md:py-1 mx-2.5 my-1.5 rounded transition-opacity duration-300 focus:opacity-25"
        >
            <img src="{{ $button['image'] }}" alt="{{ $button['alt'] }}" class="w-4 h-4 mr-2">
            {{ $button['text'] }}
        </button>
    @endforeach

    <style>
        .backgroundButton {
            background: rgba(0, 170, 227, 0.10);
        }

        .fontSocial {
            font-size: 11px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px
        }
    </style>
</div>

