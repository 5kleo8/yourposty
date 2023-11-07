<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>youposty</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,200;9..40,300&family=Fira+Code:wght@300&family=Gabarito&display=swap"
        rel="stylesheet">
    @vite('resources/js/app.js')
    @livewireStyles
</head>
<body>
<livewire:navbar/>
<div class="flex flex-col m-10 gap-4 items-center justify-center">
    <livewire:stepper-component/>
</div>
<!-- otros scripts -->
@livewireScriptConfig
</body>
</html>

