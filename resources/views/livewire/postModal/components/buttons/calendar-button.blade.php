<div class="mt-4">
    <button class="datetimepicker flex items-center border border-darkturquoise rounded-lg p-1 transition duration-300 focus-within:border-teal-500">

        <input type="time" id="time" class="input-field">
        <input type="date" id="date" class="input-field cursor-pointer">
    </button>
</div>

<script>
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const currentDay = currentDate.getDate().toString().padStart(2, '0');
    const currentHour = currentDate.getHours().toString().padStart(2, '0');
    const currentMinute = currentDate.getMinutes().toString().padStart(2, '0');

    dateInput.value = `${currentYear}-${currentMonth}-${currentDay}`;
    timeInput.value = `${currentHour}:${currentMinute}`;
</script>




