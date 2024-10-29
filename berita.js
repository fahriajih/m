document.getElementById("fetch-btn").addEventListener("click", fetchArticle);

async function fetchArticle() {
    const articleTitle = document.getElementById("article-input").value;
    const titleElement = document.getElementById("article-title");
    const contentElement = document.getElementById("content");

    if (articleTitle) {
        const url = `https://id.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(articleTitle)}&format=json&origin=*`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.parse) {
                titleElement.innerText = articleTitle;
                contentElement.innerHTML = data.parse.text['*'];
            } else {
                titleElement.innerText = "Artikel tidak ditemukan.";
                contentElement.innerHTML = "";
            }
        } catch (error) {
            titleElement.innerText = "Terjadi kesalahan saat mengambil artikel.";
            contentElement.innerHTML = "";
        }
    }
}
// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpoint untuk mengambil artikel dari Wikipedia
app.get('/api/article/:title', async (req, res) => {
    const { title } = req.params;

    try {
        const url = `https://id.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&format=json&origin=*`;
        const response = await axios.get(url);

        if (response.data.parse) {
            res.json({
                title: title,
                content: response.data.parse.text['*']
            });
        } else {
            res.status(404).json({ message: "Artikel tidak ditemukan." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil artikel." });
    }
});

// Mulai server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
async function fetchArticle() {
    const articleTitle = document.getElementById("article-input").value;
    const titleElement = document.getElementById("article-title");
    const contentElement = document.getElementById("content");

    if (articleTitle) {
        const url = `http://localhost:3000/api/article/${encodeURIComponent(articleTitle)}`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.content) {
                titleElement.innerText = data.title;
                contentElement.innerHTML = data.content;
            } else {
                titleElement.innerText = "Artikel tidak ditemukan.";
                contentElement.innerHTML = "";
            }
        } catch (error) {
            titleElement.innerText = "Terjadi kesalahan saat mengambil artikel.";
            contentElement.innerHTML = "";
        }
    }
}
