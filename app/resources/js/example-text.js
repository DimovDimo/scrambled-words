let text = document.getElementById("input");

document.getElementById("blank")
    .addEventListener("click", function () {
        text.innerHTML = "";
    });

document.getElementById("sun")
    .addEventListener("click", function () {
        text.innerHTML = "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as visible light and infrared radiation. It is by far the most important source of energy for life on Earth. Its diameter is about 1.39 million kilometres (864,000 miles), or 109 times that of Earth. Its mass is about 330,000 times that of Earth; it accounts for about 99.86% of the total mass of the Solar System. Roughly three quarters of the Sun's mass consists of hydrogen (~73%); the rest is mostly helium (~25%), with much smaller quantities of heavier elements, including oxygen, carbon, neon and iron. Source: https://en.wikipedia.org/wiki/Sun";
    });

document.getElementById("earth")
    .addEventListener("click", function () {
        text.innerHTML = "Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics. Source: https://en.wikipedia.org/wiki/Earth";
    });

document.getElementById("lorem-ipsum")
    .addEventListener("click", function () {
        text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id neque a odio cursus lobortis. Ut laoreet metus ac ante rutrum laoreet. Suspendisse eu justo sit amet nisl facilisis lobortis. Maecenas ex nibh, vulputate at tincidunt sed, tincidunt sit amet libero. Donec ultricies, ipsum eu mattis laoreet, felis ipsum sodales lacus, in bibendum mauris dui sit amet ex. Integer interdum, dolor sit amet sollicitudin dignissim, turpis turpis bibendum magna, quis pellentesque nulla elit at diam. Nunc pharetra purus ut faucibus egestas. Suspendisse cursus ultricies nisl, eu molestie purus dictum venenatis. Suspendisse potenti. Donec eu egestas risus, id accumsan augue. Donec nisl lectus, pharetra sit amet erat ac, bibendum mattis dui. Aenean pellentesque felis non fermentum sagittis. Nullam placerat, risus in ullamcorper tristique, lorem felis rutrum enim, in condimentum libero sem eget odio.";
    });