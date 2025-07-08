//Task Four


document.addEventListener('keydown', function(event) {

    if (event.altKey || event.ctrlKey || event.shiftKey) {
        let modifierPressed = '';
        
        if (event.altKey) modifierPressed = 'Alt';
        if (event.ctrlKey) modifierPressed = 'Ctrl';
        if (event.shiftKey) modifierPressed = 'Shift';
        
        alert(`${modifierPressed} key pressed`);
        
        //event.preventDefault();
    }
});