document.addEventListener('DOMContentLoaded', () =>{
    const body = document.body;
    const containers = document.getElementsByClassName('content');
    const androidDownload = document.getElementById('download');

    let downloadCount = 0;

    function darkModeToggle()
    {
        body.classList.toggle('darkMode');
        for(let container of containers)
        {
            container.classList.toggle('darkMode');
        }
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark');
    if(prefersDark.matches)
    {
        darkModeToggle();
    }

    androidDownload.addEventListener('click', () =>{
        location.replace('downloads/Bannania.apk');
    });

});