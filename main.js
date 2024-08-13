document.addEventListener("DOMContentLoaded", function() {
    // Exibe todos os cartões inicialmente
    filterCards('todos');

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
                menu.classList.remove('menu-open');document.addEventListener("DOMContentLoaded", function() {
    // Exibe todos os cartões inicialmente
    filterCards('todos');

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
                options.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');

                // Filtra os cards com base na opção selecionada
                const filterValue = option.getAttribute('data-filter');
                filterCards(filterValue);
            });
        });
    });

    function filterCards(filterValue) {
        const cards = document.querySelectorAll('.cards');
        cards.forEach(card => {
            if (filterValue === 'todos' || card.classList.contains(filterValue)) {
                card.classList.remove('hidden3');
            } else {
                card.classList.add('hidden3');
            }
        });
    }
});

                options.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');

                // Filtra os cards com base na opção selecionada
                const filterValue = option.getAttribute('data-filter');
                filterCards(filterValue);
            });
        });
    });

    function filterCards(filterValue) {
        const cards = document.querySelectorAll('.cards');
        cards.forEach(card => {
            if (filterValue === 'todos' || card.classList.contains(filterValue)) {
                card.classList.remove('hidden3');
            } else {
                card.classList.add('hidden3');
            }
        });
    }
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
        if (window.innerWidth > 600){ if (portuguese) {
            //cabeçalho
            $(".navlist ul li:nth-child(1) a").text("Página Inicial");
            $(".navlist ul li:nth-child(2) a").text("Sobre mim");
            $(".navlist ul li:nth-child(3) a").text("Portfólio");
            $(".navlist ul li:nth-child(4) a").text("Habilidades");
            $("button.portugues").text("Português");
            //seção "home"
            $(".title h4").text("Desenvolvedor Fullstack e Designer de UX/UI");
            $(".title h5").text("Sou um estudante de programação com foco em desenvolvimento Fullstack e pretendo ampliar meus conhecimentos a fim de aprimorar minhas habilidades");
            $(".contact-button").text("Contate-me");
            //seção "about-me"
            $(".about-me-title h2").text("Sobre mim");
            $(".about-me-text p").html("Olá, meu nome é <strong>Rodrigo Shiraishi Quadros</strong>, um apaixonado em criar websites bonitos. Desde 2018, sou fascinado por qualquer coisa relacionada á <strong>interfaces</strong> ou <strong>designs</strong> bem desenhados, e sempre desenvolvi minhas habilidades desde então, fazendo logos, banners, designs gráficos em geral. <br><br>Em 2023, decidi entrar para o mundo de programação, estudando no <strong>Instituto Mauá de Tecnologia</strong>, porém comecei bem perdido em relação á área em que eu iria atuar. Para ser bem sincero, não sabia nada de programação, então decidi me informar e esperar até que eu encontrasse uma área em que eu realmente gostasse. <br><br>Após 1 semestre, comecei a estudar <strong>CSS</strong> e <strong>HTML</strong>, meu primeiro contato com o <strong>Front-End</strong> e inclusive trabalhei para a estruturação de um projeto para uma <strong>Instituição de doações</strong>, e aí que eu simplesmente me apaixonei no Front-End. Devido á isso, comecei a praticar mais e mais para me qualificar á um emprego, e atualmente estou constantemente estudando para aprimorar meus aprendizados</strong> e <strong>iniciar minha carreira como desenvolvedor Fullstack.</strong>")
            //seção "portfolio"
            $(".portfolio-header .portfolio-title .text1").text("Um pouco do meu");
            $(".portfolio-header .portfolio-title .text2").text("Portfólio");
            $(".selected").eq(0).text("Todos");
            $(".menu").children().eq(0).text("Todos");
            $(".menu").children().eq(1).text("Apps");
            $(".menu").children().eq(2).text("Landing Page");
            $(".menu").children().eq(3).text("Website Institucional");
            $(".menu").children().eq(4).text("Portfólios");
            $(".repository").text("< repositório />")
            $(".interactions button").text("Aplicação")
            //seção "skills"
            $(".skills h1").text("Habilidades");
            //seção "contact"
            $(".announcement-text").html("Deseja me contratar para algum <strong>serviço?</strong> Talvez fazer uma <strong>proposta</strong> ou até mandar um feedback?");
            $(".announcement-text-2").text("Entre em contato já!");
            $(".form-title span:nth-child(1)").text("F o r m u l á r i o");
            $(".form-title span:nth-child(2)").text("d e");
            $(".form-title-2").text("CONTATO");
            $(".form-description").html("&lt; Preencha os dados abaixo e logo você será respondido ; &#41; /&#62");
            $(".nameLabel").text("nome");
            $(".inputMessage").attr("placeholder", "Digite sua mensagem...");
            $(".send-button").text("Enviar");
            $(".projeto1").text("Aplicativo de gestão de saúdeque permite que você acompanhe sua saúde de maneiracompleta, mantendo todas as informações importantesao seu alcance e com uma funcionalidade de escanear seus exames.");
            $(".projeto2").text("Site feito para consultar o tempo, a umidade e a temperatura e um país, estado ou cidade feito através de uma conexão com uma API.");
            $(".projeto3").text("Site Institucional desenvolvido para uma instituição beneficiente.");
            $(".projeto4").text("Meu Portfolio pessoal desenvolvido para mostrar um pouco mais de mim, dos meus projetos e dos meus conhecimentos.");
            $(".projeto5").text("Design de um portfolio feito para a Taynah Saito.");
            $(".footer").text("< Feito com carinho por ");
            $(".projeto1-title").text("YE Gestão de Saúde");
            $(".projeto3-title").text("Escola o Semeador");
            $(".projeto4-title").text("Portfólio RShira");
            $(".projeto5-title").text("Portfólio Taynah Saito");
            

            portuguese = false;
        } else {
            // Restore English
            $(".navlist ul li:nth-child(1) a").text("Home");
            $(".navlist ul li:nth-child(2) a").text("About me");
            $(".navlist ul li:nth-child(3) a").text("Portfolio");
            $(".navlist ul li:nth-child(4) a").text("Skills");
            $("button.portugues").text("English");
            //seção "home"
            $(".title h4").text("Fullstack Developer & UX/UI Designer");
            $(".title h5").text("I am a programming student focused on Fullstack development and I intend to expand my knowledge in order to improve my skills");
            $(".contact-button").text("Contact me");
            //seção "about-me"
            $(".about-me-title h2").text("About me");
            $(".about-me-text p").html("Hello, my name is <strong>Rodrigo Shiraishi Quadros</strong>, passionate about creating beautiful websites. Since 2018, I've been fascinated by anything related to <strong>interfaces</strong> or well-designed <strong>designs</strong>, and I've always developed my skills since then, making logos, banners, graphic designs in general. <br><br>In 2023, I decided to enter the world of programming, studying at the <strong>Instituto Mauá de Tecnologia</strong>, but I started out quite lost in relation to the area in which I would work. To be quite honest, I didn't know anything about programming, so I decided to inform myself and wait until I find an area that I really like. <br><br>After 1 semester, I started studying <strong>CSS</strong> and <strong>HTML</strong>, my first contact with <strong>Front-End</strong> and I even worked to structure a project for a <strong>donation institution</strong>, and that's when I simply fell in love with Front-End. Therefore, I started practicing more and more to qualify for a job, and I am currently <strong>studying constantly to improve my learning</strong> and <strong>start my career as a Fullstack developer</strong>.")
            //seção "portfolio"
            $(".portfolio-header .portfolio-title .text1").text("A little bit of my");
            $(".portfolio-header .portfolio-title .text2").text("Portfolio");
            $(".selected").eq(0).text("All");
            $(".menu").children().eq(0).text("All");
            $(".menu").children().eq(1).text("Apps");
            $(".menu").children().eq(2).text("Landing Page");
            $(".menu").children().eq(3).text("Institutional Website");
            $(".menu").children().eq(4).text("Portfolios");
            $(".repository").text("< repository />")
            $(".interactions button").text("Application")
            //seção "skills"
            $(".skills h1").text("Skills");
            //seção "contact"
            $(".announcement-text").html("Looking to hire me for a <strong>job?</strong> Maybe make a <strong>proposal</strong> or even send feedback?");
            $(".announcement-text-2").text("Get in touch now!");
            $(".form-title span:nth-child(1)").text("F o r m");
            $(".form-title span:nth-child(2)").text("o f");
            $(".form-title-2").text("CONTACT");
            $(".form-description").html("&lt; Fill out the information below and you will be answered shortly ; &#41; /&#62");
            $(".nameLabel").text("name");
            $(".inputMessage").attr("placeholder", "Type your message...");
            $(".send-button").text("Send");
            $(".projeto1").text("Health management application that allows you to monitor your health completely, keeping all important information at your fingertips and with a functionality to scan your exams.");
            $(".projeto2").text("Website made to query the weather, humidity and temperature and a country, state or city made through a connection with an API.");
            $(".projeto3").text("My personal Portfolio developed to show a little more about myself, my projects and my knowledge.");
            $(".projeto4").text("Institutional website developed for a charitable institution.");
            $(".projeto5").text("Portfolio interface design made for Taynah Saito.");
            $(".footer").text("< Made with love by ");
            $(".projeto1-title").text("YE Gestão de Saúde");
            $(".projeto3-title").text("o Semeador School");
            $(".projeto4-title").text("RShira's Portfolio");
            $(".projeto5-title").text("Taynah Saito's Portfolio");
            

            portuguese = true;
        }}else{
            if (portuguese) {
                //cabeçalho
                $(".navlist ul li:nth-child(1) a").text("Página Inicial");
                $(".navlist ul li:nth-child(2) a").text("Sobre mim");
                $(".navlist ul li:nth-child(3) a").text("Portfólio");
                $(".navlist ul li:nth-child(4) a").text("Habilidades");
                $("button.portugues").text("PT");
                //seção "home"
                $(".title h4").text("Desenvolvedor Fullstack e Designer de UX/UI");
                $(".title h5").text("Sou um estudante de programação com foco em desenvolvimento Fullstack e pretendo ampliar meus conhecimentos a fim de aprimorar minhas habilidades");
                $(".contact-button").text("Contate-me");
                //seção "about-me"
                $(".about-me-title h2").text("Sobre mim");
                $(".about-me-text p").html("Olá, meu nome é <strong>Rodrigo Shiraishi Quadros</strong>, um apaixonado em criar websites bonitos. Desde 2018, sou fascinado por qualquer coisa relacionada á <strong>interfaces</strong> ou <strong>designs</strong> bem desenhados, e sempre desenvolvi minhas habilidades desde então, fazendo logos, banners, designs gráficos em geral. <br><br>Em 2023, decidi entrar para o mundo de programação, estudando no <strong>Instituto Mauá de Tecnologia</strong>, porém comecei bem perdido em relação á área em que eu iria atuar. Para ser bem sincero, não sabia nada de programação, então decidi me informar e esperar até que eu encontrasse uma área em que eu realmente gostasse. <br><br>Após 1 semestre, comecei a estudar <strong>CSS</strong> e <strong>HTML</strong>, meu primeiro contato com o <strong>Front-End</strong> e inclusive trabalhei para a estruturação de um projeto para uma <strong>Instituição de doações</strong>, e aí que eu simplesmente me apaixonei no Front-End. Devido á isso, comecei a praticar mais e mais para me qualificar á um emprego, e atualmente estou constantemente estudando para aprimorar meus aprendizados</strong> e <strong>iniciar minha carreira como desenvolvedor Fullstack.</strong>")
                //seção "portfolio"
                $(".portfolio-header .portfolio-title .text1").text("Um pouco do meu");
                $(".portfolio-header .portfolio-title .text2").text("Portfólio");
                $(".selected").eq(0).text("Todos");
                $(".menu").children().eq(0).text("Todos");
                $(".menu").children().eq(1).text("Apps");
                $(".menu").children().eq(2).text("Landing Page");
                $(".menu").children().eq(3).text("Website Institucional");
                $(".menu").children().eq(4).text("Portfólios");
                $(".repository").text("< repositório />")
                $(".interactions button").text("Aplicação")
                //seção "skills"
                $(".skills h1").text("Habilidades");
                //seção "contact"
                $(".announcement-text").html("Deseja me contratar para algum <strong>serviço?</strong> Talvez fazer uma <strong>proposta</strong> ou até mandar um feedback?");
                $(".announcement-text-2").text("Entre em contato já!");
                $(".form-title span:nth-child(1)").text("F o r m u l á r i o");
                $(".form-title span:nth-child(2)").text("d e");
                $(".form-title-2").text("CONTATO");
                $(".form-description").html("&lt; Preencha os dados abaixo e logo você será respondido ; &#41; /&#62");
                $(".nameLabel").text("nome");
                $(".inputMessage").attr("placeholder", "Digite sua mensagem...");
                $(".send-button").text("Enviar");
                $(".projeto1").text("Aplicativo de gestão de saúdeque permite que você acompanhe sua saúde de maneiracompleta, mantendo todas as informações importantesao seu alcance e com uma funcionalidade de escanear seus exames.");
                $(".projeto2").text("Site feito para consultar o tempo, a umidade e a temperatura e um país, estado ou cidade feito através de uma conexão com uma API.");
                $(".projeto3").text("Site Institucional desenvolvido para uma instituição beneficiente.");
                $(".projeto4").text("Meu Portfolio pessoal desenvolvido para mostrar um pouco mais de mim, dos meus projetos e dos meus conhecimentos.");
                $(".projeto5").text("Design de um portfolio feito para a Taynah Saito.");
                $(".footer").text("< Feito com carinho por ");
                $(".projeto1-title").text("YE Gestão de Saúde");
                $(".projeto3-title").text("Escola o Semeador");
                $(".projeto4-title").text("Portfólio RShira");
                $(".projeto5-title").text("Portfólio Taynah Saito");
    
                portuguese = false;
            } else {
                // Restore English
                $(".navlist ul li:nth-child(1) a").text("Home");
                $(".navlist ul li:nth-child(2) a").text("About me");
                $(".navlist ul li:nth-child(3) a").text("Portfolio");
                $(".navlist ul li:nth-child(4) a").text("Skills");
                $("button.portugues").text("EN");
                //seção "home"
                $(".title h4").text("Fullstack Developer & UX/UI Designer");
                $(".title h5").text("I am a programming student focused on Fullstack development and I intend to expand my knowledge in order to improve my skills");
                $(".contact-button").text("Contact me");
                //seção "about-me"
                $(".about-me-title h2").text("About me");
                $(".about-me-text p").html("Hello, my name is <strong>Rodrigo Shiraishi Quadros</strong>, passionate about creating beautiful websites. Since 2018, I've been fascinated by anything related to <strong>interfaces</strong> or well-designed <strong>designs</strong>, and I've always developed my skills since then, making logos, banners, graphic designs in general. <br><br>In 2023, I decided to enter the world of programming, studying at the <strong>Instituto Mauá de Tecnologia</strong>, but I started out quite lost in relation to the area in which I would work. To be quite honest, I didn't know anything about programming, so I decided to inform myself and wait until I find an area that I really like. <br><br>After 1 semester, I started studying <strong>CSS</strong> and <strong>HTML</strong>, my first contact with <strong>Front-End</strong> and I even worked to structure a project for a <strong>donation institution</strong>, and that's when I simply fell in love with Front-End. Therefore, I started practicing more and more to qualify for a job, and I am currently <strong>studying constantly to improve my learning</strong> and <strong>start my career as a Fullstack developer</strong>.")
                //seção "portfolio"
                $(".portfolio-header .portfolio-title .text1").text("A little bit of my");
                $(".portfolio-header .portfolio-title .text2").text("Portfolio");
                $(".selected").eq(0).text("All");
                $(".menu").children().eq(0).text("All");
                $(".menu").children().eq(1).text("Apps");
                $(".menu").children().eq(2).text("Landing Page");
                $(".menu").children().eq(3).text("Institutional Website");
                $(".menu").children().eq(4).text("Portfolios");
                $(".repository").text("< repository />")
                $(".interactions button").text("Application")
                //seção "skills"
                $(".skills h1").text("Skills");
                //seção "contact"
                $(".announcement-text").html("Looking to hire me for a <strong>job?</strong> Maybe make a <strong>proposal</strong> or even send feedback?");
                $(".announcement-text-2").text("Get in touch now!");
                $(".form-title span:nth-child(1)").text("F o r m");
                $(".form-title span:nth-child(2)").text("o f");
                $(".form-title-2").text("CONTACT");
                $(".form-description").html("&lt; Fill out the information below and you will be answered shortly ; &#41; /&#62");
                $(".nameLabel").text("name");
                $(".inputMessage").attr("placeholder", "Type your message...");
                $(".send-button").text("Send");
                $(".projeto1").text("Health management application that allows you to monitor your health completely, keeping all important information at your fingertips and with a functionality to scan your exams.");
                $(".projeto2").text("Website made to query the weather, humidity and temperature and a country, state or city made through a connection with an API.");
                $(".projeto3").text("My personal Portfolio developed to show a little more about myself, my projects and my knowledge.");
                $(".projeto4").text("Institutional website developed for a charitable institution.");
                $(".projeto5").text("Portfolio interface design made for Taynah Saito.");
                $(".footer").text("Made with love by ");
                $(".projeto1-title").text("YE Gestão de Saúde");
                $(".projeto3-title").text("o Semeador School");
                $(".projeto4-title").text("RShira's Portfolio");
                $(".projeto5-title").text("Taynah Saito's Portfolio");
    
                portuguese = true;
            }
        }
       
    });
});

const alternativeStyles = {
    '--backgroundColor': '#ECECEC',
    '--backgroundHeaderColor': '#F6F6F6',
    '--backgroundCards': '#DBDBDB',
    '--backgroundTools': '#E7E7E7',
    '--backgroundToolsHover': '#F3F3F3',
    '--colorToolsStroke': '#CCCCCC',
    '--colorBackgroundButtons': '#D8D8D8',
    '--colorBackgroundButtonsHover': '#D0D0D0',
    '--colorTexts': '#180E1B',
    '--colorBorderFormInput': '#180E1B',
    '--colorSubtitle': '#494747',
    '--colorContact': '#160D18',
    '--colorPortugueseText': '#929292',
    '--colorActiveButtonContact' : '#B3B3B3',
    '--repositoryColorSecondary': '#160D18',
    '--repositoryColorTerciary': '#160D18',
    '--backgroundAboutme': '#E2E2E2',
    '--aboutmeColorText': '#E1122',
    '--aboutmeColorStroke': '#B3B3B3',
    '--PortfolioBoxShadow': '#d1d1d1de',
    '--PortfolioBackground': '#ECECEC',
    '--NavbarShadow': '#E0E0E0',
    '--colorTextCV' : '#f0f0f0',
    '--colorGradientPrimary' : '#26172B',
    '--colorGradientSecondary' : '#26172B',
    '--colorGradientPrimaryActive' : '#52395c',
    '--colorGradientSecondaryActive' : '#52395c',
    '--colorScrollBar' : '#929292'
};

const originalStyles = {
    '--backgroundColor': '#120a14',
    '--backgroundHeaderColor': '#0f0911',
    '--backgroundCards': '#1D1320',
    '--backgroundTools': '#1E1122',
    '--backgroundToolsHover': '#362E39',
    '--colorToolsStroke': '#4B414E',
    '--colorBackgroundButtons': '#281B2C',
    '--colorBackgroundButtonsHover': '#513758',
    '--colorTexts': '#ebebeb',
    '--colorBorderFormInput': '#ECECEC',
    '--colorSubtitle': '#dedede',
    '--colorContact': '#B6325F',
    '--colorPortugueseText': '#ebebeb',
    '--colorActiveButtonContact' : '#36213d',
    '--repositoryColorSecondary': '#B6325F',
    '--repositoryColorTerciary': '#FF887C',
    '--backgroundAboutme': '#180E1B',
    '--aboutmeColorText': '#C5C5C5',
    '--aboutmeColorStroke': '#3F3F3F',
    '--PortfolioBoxShadow': '#160D19',
    '--PortfolioBackground': '#180E1B',
    '--NavbarShadow': '#0c070e',
    '--colorTextCV' : '#120a14',
    '--colorGradientPrimary' : '#FF887C',
    '--colorGradientSecondary' : '#B6325F',
    '--colorGradientPrimaryActive' : '#ff9e95',
    '--colorGradientSecondaryActive' : '#e24a7c',
    '--colorScrollBar' : '#513758'
};

function restoreAlternativeStyles() {
    const root = document.documentElement;
    for (const [property, value] of Object.entries(alternativeStyles)) {
        root.style.setProperty(property, value);
    }
}

function restoreOriginalStyles() {
    const root = document.documentElement;
    for (const [property, value] of Object.entries(originalStyles)) {
        root.style.setProperty(property, value);
    }
}

document.querySelector('.dark-mode-button').addEventListener('click', function() {
    event.preventDefault();
    var images = document.querySelectorAll('.dark-mode');
    images.forEach(function(image) {
        image.style.transition = 'opacity 0.2s ease-in-out';
        image.style.opacity = '0.2';
        const root = document.documentElement;
        const lightIcons = document.querySelectorAll(".light-icons");
        const darkIcons = document.querySelectorAll(".dark-icons");
        setTimeout(function() {
            if (image.src.match('/images/Lua.png')) {
                image.src = '/images/Sol2.png';
                restoreAlternativeStyles();

                lightIcons.forEach(function(icon) {
                    icon.style.display = 'none';
                });
                darkIcons.forEach(function(icon) {
                    icon.style.display = 'block';
                });

                var darkImage = '/images/escuro(2).png';
                var lightImage = '/images/claro(2).png';
                var isDarkMode = true;

                document.querySelector('.logo-image').src = darkImage;
                document.querySelector('.toggleButton').addEventListener('click', function() {
                    var images = document.querySelectorAll('.logo-image');
                    images.forEach(function(image) {
                        image.style.transition = 'opacity 0.2s ease-in-out';
                        image.style.opacity = '0.2';

                        setTimeout(function() {
                            if (isDarkMode) {
                                image.src = lightImage;
                            } else {
                                image.src = darkImage;
                            }
                            isDarkMode = !isDarkMode;
                            setTimeout(function() {
                                image.style.opacity = '1';
                            }, 50);
                        }, 200);
                    });
                });


            } else {
                image.src = '/images/Lua.png';
                restoreOriginalStyles();

                lightIcons.forEach(function(icon) {
                    icon.style.display = 'block';
                });
                darkIcons.forEach(function(icon) {
                    icon.style.display = 'none';
                });

                var darkImage = '/images/Escuro.png';
                var lightImage = '/images/Claro.png';
                var isDarkMode = true;

                document.querySelector('.logo-image').src = darkImage;
                document.querySelector('.toggleButton').addEventListener('click', function() {
                    var images = document.querySelectorAll('.logo-image');
                    images.forEach(function(image) {
                        image.style.transition = 'opacity 0.2s ease-in-out';
                        image.style.opacity = '0.2';

                        setTimeout(function() {
                            if (isDarkMode) {
                                image.src = lightImage;
                            } else {
                                image.src = darkImage;
                            }
                            isDarkMode = !isDarkMode;
                            setTimeout(function() {
                                image.style.opacity = '1';
                            }, 50);
                        }, 200);
                    });
                });
            }
            setTimeout(function() {
                image.style.opacity = '1';
            }, 50);
        }, 100);
    });
});


var logo_dark = 'images/ShiraLogo - Home_Dark2.png';
var logo_light = 'images/ShiraLogo - Home.png';
var arrows_dark = 'images/Group 1 1.png';
var arrows_light = 'images/Group 1.png';
var flutter_light = 'images/Flutter_logo.svg.png';
var flutter_dark = 'images/Flutter_logo.svg-d.png';
var dart_light = 'images/Dart-logo.png';
var dart_dark = 'images/Dart-logo-d.png';
var firebase_light = 'images/firebase_logo_icon_171157.png';
var firebase_dark = 'images/firebase_logo_icon_171157-d.png';
var html_light = 'images/HTML-logo 2.png';
var html_dark = 'images/HTML-logo 2-d.png';
var css_light = 'images/CSS-logo-3 2.png';
var css_dark = 'images/CSS-logo-3 2-d.png';
var js_light = 'images/Javascript_badge-c 1.png';
var js_dark = 'images/Javascript_badge-c 1-d.png';
var bootstrap_light = 'images/Bootstrap_logo-c 1.png';
var bootstrap_dark = 'images/Bootstrap_logo-c 1-d.png';
var figma_light = 'images/1667px-Figma-logo-c.png';
var figma_dark = 'images/1667px-Figma-logo-c-d.png';


function trocar(){
    document.querySelector('.logo-3d').src = logo_dark;
    let aux = logo_dark;
    logo_dark = logo_light;
    logo_light = aux;
    
    document.querySelector('.arrows').src = arrows_dark;
    let aux2 = arrows_dark;
    arrows_dark = arrows_light;
    arrows_light = aux2;


    document.querySelectorAll('.flutter').forEach(function(element) {
        element.src = flutter_dark;
    });
    let aux8 = flutter_dark;
    flutter_dark = flutter_light;
    flutter_light = aux8;

    document.querySelectorAll('.firebase').forEach(function(element) {
        element.src = firebase_dark;
    });
    let aux9 = firebase_dark;
    firebase_dark = firebase_light;
    firebase_light = aux9;

    document.querySelectorAll('.dart').forEach(function(element) {
        element.src = dart_dark;
    });
    let aux10 = dart_dark;
    dart_dark = dart_light;
    dart_light = aux10;

    document.querySelectorAll('.html').forEach(function(element) {
        element.src = html_dark;
    });
    let aux11 = html_dark;
    html_dark = html_light;
    html_light = aux11;

    document.querySelectorAll('.css').forEach(function(element) {
        element.src = css_dark;
    });
    let aux12 = css_dark;
    css_dark = css_light;
    css_light = aux12;

    document.querySelectorAll('.js').forEach(function(element) {
        element.src = js_dark;
    });
    let aux13 = js_dark;
    js_dark = js_light;
    js_light = aux13;

    document.querySelectorAll('.figma').forEach(function(element) {
        element.src = figma_dark;
    });
    let aux14 = figma_dark;
    figma_dark = figma_light;
    figma_light = aux14;

    document.querySelectorAll('.bootstrap').forEach(function(element) {
        element.src = bootstrap_dark;
    });
    let aux15 = bootstrap_dark;
    bootstrap_dark = bootstrap_light;
    bootstrap_light = aux15;

};


function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href");
    
    if (!id) {
        console.error(`Href attribute is missing or empty on element: ${element}`);
        return 0;
    }

    const targetElement = document.querySelector(id);

    if (targetElement) {
        return targetElement.offsetTop;
    } else {
        console.error(`Element not found: ${id}`);
        return 0;
    }
}

function nativeScroll(distanceFromTheTop) {
    window.scroll({
        top: distanceFromTheTop,
        behavior: "smooth",
    });
}

function scrollToSection(event) {
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90;
    nativeScroll(distanceFromTheTop);
}

const menuLinks = document.querySelectorAll('.navlist a[href^="#"]');
const contactLinks = document.querySelectorAll('.main-buttons a[href^="#"]:nth-child(2)');


menuLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
});



document.getElementById('emailButton').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "rodrigoshiraquadros@gmail.com", 
            Password: "7AF9FA675C2F8892A10A1625C549AC644E15", 
            To: "rodrigoshiraquadros@gmail.com",
            From: "rodrigoshiraquadros@gmail.com", 
            Subject: `${name}`,
            Body: `Email: ${email} \n\n\n ${message}`
        }).then(
            message => {
                message => alert(message)
                
                alert('Mensagem enviada com sucesso!');

                document.getElementById('nameInput').value = '';
                document.getElementById('emailInput').value = '';
                document.getElementById('messageInput').value = '';
                location.reload();
            }
        ).catch(error => {
            console.error('Erro ao enviar e-mail:', error);
            alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
        });
});




const myObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));

const myObserver2 = new IntersectionObserver((entries2, observer2) => {
    entries2.forEach((entry2) => {
        if (entry2.isIntersecting) {
            entry2.target.classList.add('show2');
            observer2.unobserve(entry2.target);
        }
    });
});

const elements2 = document.querySelectorAll('.hidden2');

elements2.forEach((element2) => myObserver2.observe(element2));

const myObserver3 = new IntersectionObserver((entries3, observer3) => {
    entries3.forEach((entry3, index) => {
        if (entry3.isIntersecting) {
            entry3.target.classList.add('show3', `delay-${index + 1}`);
            observer3.unobserve(entry3.target);
        }
    });
}, { threshold: 0.5 });

const elements3 = document.querySelectorAll('.hidden3');

elements3.forEach((element3, index) => {
    myObserver3.observe(element3);
});


document.querySelector('.main-logo').addEventListener('mousemove', function(e) {
    const container = document.querySelector('.logo-container');
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.querySelector('.main-logo').addEventListener('mouseleave', function() {
    const container = document.querySelector('.logo-container');
    container.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

document.addEventListener("DOMContentLoaded", function() {
    function updateButtonText() {
        var button = document.querySelector(".portugues");
        if (window.innerWidth < 600) {
            button.textContent = "PT";
        } else {
            button.textContent = "Português";
        }
    }

    updateButtonText();

    window.addEventListener("resize", updateButtonText);
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "images/bars-solid-mobile.svg"
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "images/xmark-solid.svg"
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const myObserver4 = new IntersectionObserver((entries4, observer4) => {
        entries4.forEach((entry4) => {
            if (entry4.isIntersecting) {
                console.log('Elemento visível:', entry4.target);
                entry4.target.classList.add('show4');
                observer4.unobserve(entry4.target);
            }
        });
    }, { threshold: 0.5 });
    
    const elements4 = document.querySelectorAll('.hidden4');
    
    elements4.forEach((element4) => {
        console.log('Observando elemento:', element4);
        myObserver4.observe(element4);
    });
});



const myObserver6 = new IntersectionObserver((entries6, observer6) => {
    entries6.forEach((entry6) => {
        if(entry6.isIntersecting){
            entry6.target.classList.add('show6');
            observer6.unobserve(entry6.target);
        }
    });
});

const elements6 = document.querySelectorAll('.hidden6');

elements6.forEach((element6) => myObserver6.observe(element6));
