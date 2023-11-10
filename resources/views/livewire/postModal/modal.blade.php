 <link rel="stylesheet" href="{{ mix('css/app.css') }}">
<script src="{{ mix('js/app.js') }}" defer></script>
@livewireStyles


<div class="flex items-center justify-center md:m-8 rounded-3xl">
    <div class="border flex flex-row shadow-2xl bg-white rounded-3xl">
        <div class="cardMobile">
            <livewire:new-post/>
        </div>
        <div class="hidden lg:flex px-20 rounded-r-3xl" style="background: #d3d3d3;">
            <livewire:preview/>
        </div>
    </div>
</div>









