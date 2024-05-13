const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Food Finder</title>
</head>
<body>
    <div class="container">
        <h1>Recipe Finder</h1>
        <form>
            <input type="text" id="search" placeholder="Enter ingredients">
            <button type="button" id="submit" class="btn">Search</button>
        </form>
        <div id="results"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
    `);
    await page.addScriptTag({ path: '/Users/alimanbibolov/ReciepHub/script.js' });
    await browser.close();
})();