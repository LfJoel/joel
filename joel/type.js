var app = document.getElementById('app');
var typewriter = new Typewriter(app,
    {
        loop: true
    });

    typewriter.typeString('Web Developer')
     .pauseFor(2500)
     .deleteAll()
     .typeString('Web Designer')
     .pauseFor(2500)
     .deleteAll()
     .typeString('Full stack developer')
    //  .pauseFor(2500)
    //  .deleteAll()
    //  .typeString('web Developer')
     .start();