
    window.lengthCounterHandler = function lengthCounterHandler(e, targetId, maxLength = 50, additionalText = '') {
    const target = document.getElementById(targetId);
    const inputValue = e.target.value;
    if (inputValue.length > maxLength) {
    e.target.value = inputValue.slice(0, maxLength);
}
    target.innerText = `${e.target.value.length}/${maxLength} ${additionalText}`;
}



