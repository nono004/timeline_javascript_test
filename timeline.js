const first_article = {time: '2024/09/27', title: 'test', content: 'this is test article'};
const timeline = document.getElementById('article_timeline');
const articles = [];

articles.unshift(first_article);

//記事の描画
function renderArticles(newArticles) {
    //一度すべての子要素を削除
    timeline.innerHTML = '';
    newArticles.forEach((article) => {
    const container = document.createElement('li');
    container.className = 'timeline-container';
    const time = document.createElement('p');
    time.textContent = article.time;
    const title = document.createElement('h3');
    title.textContent = article.title;
    const content = document.createElement('p')
    content.textContent = article.content;

    container.appendChild(time);
    container.appendChild(title);
    container.appendChild(content);
    timeline.appendChild(container);

    });
}

renderArticles(articles);



const button = document.getElementById('button');

function add_new_articles(){

    const second_article = {time: '2024/09/27', title: 'second', content: 'this is second article'};
    const third_article = {time: '2024/09/27', title: 'third', content: 'this is third article'};

    //新しい記事を追加
    articles.unshift(second_article);
    articles.unshift(third_article);

    renderArticles(articles);
}