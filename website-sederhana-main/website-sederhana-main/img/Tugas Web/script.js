document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('learn-more').addEventListener('click', function () {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    });
});
