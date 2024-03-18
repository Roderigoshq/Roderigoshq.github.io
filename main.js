document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                selected.innerText = option.innerText;
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
                options.forEach(option => {
                    option.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    });
});

document.querySelector('.toggleButton').addEventListener('click', function() {
    var images = document.querySelectorAll('.logo-image');
    images.forEach(function(image) {
        image.style.transition = 'opacity 0.2s ease-in-out';
        image.style.opacity = '0.2';

        setTimeout(function() {
            if (image.src.match('/images/Escuro.png')) {
                image.src = '/images/Claro.png';
            } else {
                image.src = '/images/Escuro.png';
            }
            setTimeout(function() {
                image.style.opacity = '1';
            }, 50);
        }, 200);
    });
});

$(function() {
    var portuguese = false;

    $("button.portugues").click(function() {
        if (portuguese) {
            //cabeçalho
            $(".navlist ul li:nth-child(1) a").text("Página Inicial");
            $(".navlist ul li:nth-child(2) a").text("Sobre mim");
            $(".navlist ul li:nth-child(3) a").text("Portfólio");
            $(".navlist ul li:nth-child(4) a").text("Habilidades");
            $("button.portugues").text("Português");
            //seção "home"
            $(".title h4").text("Desenvolvedor Front-End e Designer de UX/UI");
            $(".title h5").text("Sou um estudante de programação com foco em desenvolvimento Web e pretendo ampliar meus conhecimentos a fim de aprimorar minhas habilidades");
            $(".contact").text("Contate-me");
            //seção "about-me"
            $(".about-me-title h2").text("Sobre mim");
            $(".about-me-text p").html("Olá, meu nome é <strong>Rodrigo Shiraishi Quadros</strong>, um apaixonado em criar websites bonitos. Desde 2018, sou fascinado por qualquer coisa relacionada á <strong>interfaces</strong> ou <strong>designs</strong> bem desenhados, e sempre desenvolvi minhas habilidades desde então, fazendo logos, banners, designs gráficos em geral. <br><br>Em 2023, decidi entrar para o mundo de programação, estudando no <strong>Instituto Mauá de Tecnologia</strong>, porém comecei bem perdido em relação á área em que eu iria atuar. Para ser bem sincero, não sabia nada de programação, então decidi me informar e esperar até que eu encontrasse uma área em que eu realmente gostasse. <br><br>Após 1 semestre, comecei a estudar <strong>CSS</strong> e <strong>HTML</strong>, meu primeiro contato com o <strong>Front-End</strong> e inclusive trabalhei para a estruturação de um projeto para uma <strong>Instituição de doações</strong>, e aí que eu simplesmente me apaixonei no Front-End. Devido á isso, comecei a praticar mais e mais para me qualificar á um emprego, e atualmente estou constantemente estudando para aprimorar meus aprendizados</strong> e <strong>iniciar minha carreira como desenvolvedor Front-End.</strong>")
            //seção "portfolio"
            $(".portfolio-header .portfolio-title .text1").text("Um pouco do meu");
            $(".portfolio-header .portfolio-title .text2").text("Portfólio");
            $(".selected").eq(0).text("Todos");
            $(".menu").children().eq(0).text("Todos");
            $(".menu").children().eq(1).text("Portfólio");
            $(".menu").children().eq(2).text("Website Institucional");
            $(".menu").children().eq(3).text("Landing Page");
            $(".repository").text("< repositório />")
            $(".interactions button").text("Aplicação")
            //seção "skills"
            $(".skills h1").text("Habilidades");

            portuguese = false;
        } else {
            // Restore English
            $(".navlist ul li:nth-child(1) a").text("Home");
            $(".navlist ul li:nth-child(2) a").text("About me");
            $(".navlist ul li:nth-child(3) a").text("Portfolio");
            $(".navlist ul li:nth-child(4) a").text("Skills");
            $("button.portugues").text("English");
            //seção "home"
            $(".title h4").text("Front-End Developer & UX/UI Designer");
            $(".title h5").text("I am a programming student focused on Web development and I intend to expand my knowledge in order to improve my skills");
            $(".contact").text("Contact me");
            //seção "about-me"
            $(".about-me-title h2").text("About me");
            $(".about-me-text p").html("Hello, my name is <strong>Rodrigo Shiraishi Quadros</strong>, passionate about creating beautiful websites. Since 2018, I've been fascinated by anything related to <strong>interfaces</strong> or well-designed <strong>designs</strong>, and I've always developed my skills since then, making logos, banners, graphic designs in general. <br><br>In 2023, I decided to enter the world of programming, studying at the <strong>Instituto Mauá da Tecnologia</strong>, but I started out quite lost in relation to the area in which I would work. To be quite honest, I didn't know anything about programming, so I decided to inform myself and wait until I find an area that I really like. <br><br>After 1 semester, I started studying <strong>CSS</strong> and <strong>HTML</strong>, my first contact with <strong>Front-End</strong> and I even worked to structure a project for a <strong>donation institution</strong>, and that's when I simply fell in love with Front-End. Therefore, I started practicing more and more to qualify for a job, and I am currently <strong>studying constantly to improve my learning</strong> and <strong>start my career as a Front-End developer</strong>.")
            //seção "portfolio"
            $(".portfolio-header .portfolio-title .text1").text("A little bit of my");
            $(".portfolio-header .portfolio-title .text2").text("Portfolio");
            $(".selected").eq(0).text("All");
            $(".menu").children().eq(0).text("All");
            $(".menu").children().eq(1).text("Portfolio");
            $(".menu").children().eq(2).text("Institutional Website");
            $(".menu").children().eq(3).text("Landing Page");
            $(".repository").text("< repository />")
            $(".interactions button").text("Application")
            //seção "skills"
            $(".skills h1").text("Skills");

            portuguese = true;
        }
    });
});