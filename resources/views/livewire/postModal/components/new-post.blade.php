<div class="mx-8 bg-white pt-4 pb-8">
    <div class="flex items-start justify-between">
        <h2 class="ml-4">Crear una nueva publicacion</h2>
        <div class="flex items-end">
            <div class="mr-2">
                <svg id="fav" width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1006 19.2092C12.5914 18.9405 15.1469 17.4925 17.6466 15.3034C20.3782 12.9112 22.7694 9.87127 22.77 6.69292L12.1006 19.2092ZM12.1006 19.2092C11.6098 18.9405 9.05421 17.4925 6.55455 15.3034C3.8228 12.9111 1.43143 9.8709 1.43115 6.69234C1.43294 5.2447 2.0088 3.85686 3.03244 2.83322C4.05608 1.80958 5.44393 1.23372 6.89156 1.23193C8.75064 1.23209 10.3286 2.0266 11.3009 3.32149L12.1006 4.38655L12.9003 3.32149C13.8725 2.0266 15.4505 1.23209 17.3096 1.23193C18.7572 1.23372 20.1451 1.80958 21.1687 2.83322C22.1925 3.85698 22.7683 5.24503 22.77 6.69284L12.1006 19.2092Z" stroke="#E82020" stroke-width="2"/>
                </svg>
            </div>
        </div>
    </div>
    <div class="my-4">
        <livewire:social-networks/>
        <div class="flex flex-col items-end justify-end">
      <livewire:calendar-button/>
        </div>
    </div>
    <div class="relative">
        <textarea id="myTextarea" class="textarea animation-fav resize-none w-full h-48 md:h-64 lg:h-72 xl:h-80 border border-gray-300 rounded p-4 focus:outline-none focus:border-blue-500">¿Quieres invertir en un nuevo negocio y necesitas asesoramiento profesional? 🫵✌️👍😉

¿Quieres ampliar tu empresa, pero no sabes por dónde empezar? ¿Te preocupa que el proceso de creación o ampliación de tu empresa sea demasiado difícil o te lleve demasiado tiempo? 🤷🤷🤷

👉 Deja que nos encarguemos de todo. Deja todo el papeleo y los trámites en nuestras manos. ¡Nosotros nos encargamos de todo!

Los mejores profesionales y el asesoramiento más completo te esperan en en nuestra empresa. ¡Solicita más información hoy mismo! 😎🫵✌️✌️


#asesoria #despacho #administracion #gestoría #legal #trámites #freelance #business #autonomo #escritorio #negocios #asesoría #lawyer #arquitectura #marketing #lawfirm #emprender #empresas #autónomos #tugestoria #tuasesoriadeconfianza #confianza #profesionales</textarea>
        <div class="absolute bottom-2 left-2 text-grayPrimary mt-3 ml-4">
            <input type="checkbox" id="myCheckbox" class="h-4 w-4">
            <label for="myTextarea">Añadir texto predefinido en el pie</label>
        </div>
    </div>
    <div class="mt-8 desktopfonts">
        Imágenes sugeridas:
   <livewire:carousel/>
    </div>
    <div class="my-8">
        <livewire:buttons-post-modal/>
    </div>
<style>
    @keyframes animation-fav{
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    .animation-fav{
        animation: animation-fav0.3s ease-in-out;
    }
</style>
</div>

<script>
    const fav= document.getElementById('fav');
    let colorFill = false;

    fav.addEventListener('click', function() {
        if (colorFill) {
            fav.style.fill = 'none';
        } else {
            fav.style.fill = '#E82020';
        }
        colorFill = !colorFill;
        fav.classList.add('animation-fav');
        setTimeout(() => {
            fav.classList.remove('animation-fav');
        }, 300);
    });
</script>


