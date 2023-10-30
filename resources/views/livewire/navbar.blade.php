<div>
    <nav class="p-4 flex justify-center items-center lg:justify-start">
        <div class="flex items-center logo">
            <img id="logo-image" src="{{ asset('img/logo1.png') }}" alt="Logo de la Empresa" class="h-20">
        </div>
        <div class="dark-mode-toggle relative">
            <input type="checkbox" id="dark-mode-switch" class="hidden" />
            <label for="dark-mode-switch" class="switch flex items-center cursor-pointer">
        <span class="moon-icon absolute inset-0 flex items-center justify-center opacity-100 dark:opacity-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
        </span>
                <span class="sun-icon absolute inset-0 flex items-center justify-center opacity-0 dark:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
        </span>
            </label>
        </div>
    </nav>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const savedDarkMode = localStorage.getItem('darkMode');

            const isDarkMode = savedDarkMode === 'true';
            document.getElementById('dark-mode-switch').checked = isDarkMode;
            document.body.classList.toggle('dark-mode', isDarkMode);

            document.getElementById('dark-mode-switch').addEventListener('change', function() {
                localStorage.setItem('darkMode', this.checked);
                document.body.classList.toggle('dark-mode', this.checked);
            });
            const darkModeSwitch = document.getElementById('dark-mode-switch');

            const logoElement = document.getElementById('logo-image');
            if (isDarkMode) {
                logoElement.src = '{{ asset('img/logo1 blanco.png') }}';
            } else {
                logoElement.src = '{{ asset('img/logo1.png') }}';
            }

            darkModeSwitch.addEventListener('change', function() {
                const isDarkMode = this.checked;
                localStorage.setItem('darkMode', isDarkMode);
                document.body.classList.toggle('dark-mode', isDarkMode);

                // Cambiar el logo cuando el modo oscuro se active/desactive
                if (isDarkMode) {
                    logoElement.src = '{{ asset('img/logo1 blanco.png ') }}';
                } else {
                    logoElement.src = '{{ asset('img/logo1.png') }}';
                }
            });
        });
    </script>
    <style>
        .dark-mode-toggle {
            position: relative;
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        }

        .switch .moon, .switch .sun {
            position: absolute;
            top: 50%;
            transform: translate(0%, -50%);
            transition: transform 0.3s ease;
        }

        .switch .moon {
            left: 5px;
            background-color: #f1c40f;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }

        .switch .sun {
            right: 5px;
            background-color: #f39c12;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            clip-path: polygon(0% 50%, 100% 50%, 50% 100%);
        }

        #dark-mode-switch:checked + .switch .moon {
            transform: translate(100%, -50%);
        }

        #dark-mode-switch:checked + .switch .sun {
            transform: translate(0%, -50%);
        }
        .dark-mode-toggle {
            position: relative;
        }

        .dark-mode-toggle .moon-icon,
        .dark-mode-toggle .sun-icon {
            transition: opacity 0.2s ease-in-out;
        }

        body.dark-mode .moon-icon {
            opacity: 0;
        }

        body.dark-mode .sun-icon {
            opacity: 1;
        }
    </style>
</div>
