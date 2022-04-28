import PostMessage from "../models/postMessage.js" //File name not the function

export const getPosts = async (req, res) => {
    // small p in postMessage for the function
    // capital P in the PostMessage for the file
    try {
        // To retrieve all the posts in the DB
        // we use async because finding a documnet inside a model
        // taking a time so we use await
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body; //req.body is the content of the form
    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        req.status(200).json(newPost)
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}