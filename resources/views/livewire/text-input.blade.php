<div>
    <label for="input_{{ $model }}">{{ __($label) }}</label>
    <input
        type="text"
        id="input_{{ $model }}"
        class="focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-sm border @error('value') border-red-500 @else border-blackPrimary @enderror text-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-bluePrimary resize mt-1 rounded-lg "
        wire:model.live="value"
        value="{{ $value }}"
        placeholder="{{ __($placeholder) }}"
        maxlength="{{ $maxInputLength }}"
        oninput="lengthCounterHandler(event, 'counter_{{ $model }}', {{ $maxInputLength }}, '{{ $additionalText }}')"
    >
    <span id="counter_{{ $model }}" class="text-sm messageCount">
        {{ strlen($value) }}/{{ $maxInputLength }} {{ $additionalText }}
    </span>

    @error('value')
    <span class="text-red-500 text-sm">{{ $message }}</span>
    @enderror

    <style>
        @media (max-width: 768px) {
          .messageCount{
              color: #C2C2C2;
              font-size: 9px;
              font-style: normal;
              font-weight: 400;
              line-height: 9px;
          }
        }
    </style>
</div>



