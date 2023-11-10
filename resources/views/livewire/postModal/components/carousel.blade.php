<div class="flex items-center mb-2 sm:mb-0 sm:mr-4">


    <div class="carusel-container">
        <div class="carusel">
            <button id="scroll-left" class=" scroll-button scroll-button-left hidden w-9 h-9   rounded-full opacity-95">
                <
            </button>
            @foreach ($elements as $element)
                <div class="element rounded-lg mr-px">
                    <img src="{{ $element }}" alt="Imagen" class="img-carousel object-cover w-full">
                </div>
            @endforeach
        </div>
        <button id="scroll-right" class="scroll-button scroll-button-right rounded-full  w-9 h-9 opacity-95"> ></button>
    </div>

    <button wire:click="prevStep"
            class="w-24 h-24 bg-white text-blackPrimary border border-blackPrimary hover:border-bluePrimary mb-2 ml-7 rounded-lg flex flex-col items-center justify-center">
        <img src="{{ asset('img/subirImagen.svg') }}" alt="Icono SVG" class="w-6 h-6 mb-1">
        <p class="buttonTextModal">Subir imagen</p>
    </button>


    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const carusel = document.querySelector(".carusel");
            const scrollLeftButton = document.getElementById("scroll-left");
            const scrollRightButton = document.getElementById("scroll-right");

            scrollRightButton.addEventListener("click", function () {
                carusel.scrollLeft += 200;
                updateScrollButtonsVisibility();
            });

            scrollLeftButton.addEventListener("click", function () {
                carusel.scrollLeft -= 200;
                updateScrollButtonsVisibility();
            });

            carusel.addEventListener("scroll", function () {
                updateScrollButtonsVisibility();
            });

            function updateScrollButtonsVisibility() {
                scrollLeftButton.classList.toggle("hidden", carusel.scrollLeft === 0);
            }
        });
    </script>
</div>


