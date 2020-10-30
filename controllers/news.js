const { News } = require ('../model/news')


async function publishNews(req, res) {
    const { authorName, title, content, comments, viewCount } = req.body;

    if ( authorName === '' || title === '' || 
            content === '') {
        return res
          .status(400)
          .json("все поля кроме комментариев являются обязательными");
    }

    const news = await News.create({
        authorName: authorName,
        title: title,
        content: content,
        comments: comments,
        viewCount: viewCount,
        date: req.day
     });

    return res.status(200).json({
        message: "Новость успешно опубликована",
        news: news
    })
}

async function getAllNews(req, res) {
    const allNews = await News.find(); //массив новостей
    
    
    return res.status(200).json(allNews)
}

async function getOneNews(req, res) {
    try {
        const { newsId } = req.params;

        const news = await News.findById(newsId);

        news.viewCount++
        await news.save()
         console.log(news)

        return res.status(200).json({
            news: news
        })
    } catch (e) {
        return res.status(400).json(e.message);
    }
}

module.exports = {
    publishNews,
    getAllNews,
    getOneNews
}