 <link rel="stylesheet" href="{{ mix('css/app.css') }}">
<script src="{{ mix('js/app.js') }}" defer></script>
@livewireStyles


<div class="flex w-full items-center justify-center md:p-8 rounded-3xl">
    <div class="border flex flex-row shadow-2xl bg-white rounded-3xl">
        <div class="cardMobile w-full lg:w-2/3">
            <livewire:new-post/>
        </div>
        <div class="hidden lg:flex w-1/3 px-6 rounded-r-3xl" style="background: #d3d3d3;">
            <livewire:preview/>
        </div>
    </div>
</div>









