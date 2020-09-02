Array.from(document.querySelectorAll('.lbl-toggle')).forEach(label => {
  label.addEventListener('keydown', e => {
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});

Array.from(document.querySelectorAll('.lbl-toggle-2')).forEach(label => {
  label.addEventListener('keydown', e => {
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });


Array.from(document.querySelectorAll('.lbl-toggle-3')).forEach(label => {
  label.addEventListener('keydown', e => {
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});