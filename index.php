<!DOCTYPE html>
<html lang="es-ES">
	<head>
		<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="noindex"> <!--Evita la indexación-->
		<meta name="description" content="Encuentra tu habitación de corta estancia!">
		<meta name="keywords" content="">
		<meta name="author" content="Iker Karkokli">
		
		<meta property="og:title" content="Resiroom">
		<meta property="og:description" content="Encuentra tu habitación de corta estancia!">
		<meta property="og:image" content="">
		<meta property="og:url" content="">
		<meta property="og:type" content="website">
        <meta property="og:locale" content="es_ES">
        <meta property="og:site_name" content="Resiroom">
        <meta property="article:modified_time" content="2025-01-15T16:30:30+00:00">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Resiroom">
        <meta name="twitter:description" content="Encuentra tu habitación de corta estancia!">
        <meta name="twitter:image" content="">

		<title>Resiroom</title>
		<link rel="icon" href="">
        <link rel="canonical" href="">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400..800&display=swap" rel="stylesheet">

        <link rel="stylesheet" type="text/css" href="common.css">
        <link rel="stylesheet" type="text/css" href="index.css?t=<?php echo time(); ?>">
	</head>

    <body>
        <header>
            <h1 class="header-logo">
                <a href="index.html">
                    <img src="" alt="">
                </a>
            </h1>
            <div class="header-menu hidden">
                <ul class="header-list">
                    <li><a href="index.php">Inicio</a></li>
                    <li><a href="extract.php">Extracto</a></li>
                </ul>
                <svg class="burger hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <line x1="10" y1="25" x2="90" y2="25"/>
                    <line x1="10" y1="50" x2="90" y2="50"/>
                    <line x1="10" y1="75" x2="90" y2="75"/>
                </svg>
            </div>
        </header>

		<main>
			<section class="hero-section backgrounded gradient lat-pad-L">
                <h2>Resiroom</h2>
                <p>Encuentra tu habitación de corta estancia</p>
            </section>
            <section class="intro-section backgrounded lat-pad-L long-pad-L">
                <h2>Manda tu mensaje y únete al equipo</h2>
                <form class="contact-form" action="insert.php" method="post"> <!--enviar el action a insert.php-->
                    <label class="visually-hidden" for="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Nombre" required>

                    <label class="visually-hidden" for="surname">Apellido</label>
                    <input type="text" id="surname" name="surname" placeholder="Apellido" required>
                    
                    <label class="visually-hidden" for="mail">Email</label>
                    <input type="email" id="mail" name="mail" placeholder="Email" required>
                    
                    <label class="visually-hidden" for="phone">Teléfono</label>
                    <input type="tel" id="phone" name="phone" placeholder="Nº de teléfono" required>

                    <label class="visually-hidden" for="message">Mensaje</label>
                    <textarea id="message" name="message" placeholder="Mensaje"></textarea>
                    
                    <button type="submit">Enviar</button>
                </form>
                <div class="response-wrap"></div>
            </section>
        </main>

        <footer class="lat-pad-S long-pad-S">
            <div class="legal-wrap">
                <ul class="legal-list">
                    <li><a href="#">Aviso Legal</a></li>
                    <li><a href="#">Política de Cookies</a></li>
                    <li><a href="#">Protección de datos</a></li>
                </ul>
                <p class="copyright">&copy; <span id="year"></span> Resiroom. Todos los derechos reservados.</p>
            </div>
            <div class="author">
                <span>Made by</span>
                <a href="https://iturriker.github.io/portfolio" target="_blank" rel="noopener noreferrer">Iker Karkokli</a>
            </div>
        </footer>

        <script src="common.js" type="application/javascript"></script>
	</body>
</html>