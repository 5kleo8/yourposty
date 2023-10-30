<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>youposty</title>
    @vite('resources/js/app.js')
    @livewireStyles
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
    <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
</head>
<body class="dark-mode">
<livewire:navbar/>
<div>
    <livewire:stepper-component/>
</div>
<!-- otros scripts -->
@livewireScriptConfig
</body>

<style>
    .dark-mode {
        background-color: rgb(12, 12, 23);
        color: white;
    }
</style>
</html>

