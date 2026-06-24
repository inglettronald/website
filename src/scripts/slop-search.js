const input = document.getElementById('slop-search');
const items = document.querySelectorAll('#slop-list li');

input?.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();

    items.forEach((item) => {
        const haystack = item.getAttribute('data-search') ?? '';
        item.hidden = query !== '' && !haystack.includes(query);
    });
});
