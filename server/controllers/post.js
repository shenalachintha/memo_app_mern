import PostMessage from "../models/postMessage";    

const getposts =  async (req, res) => {
    try {
        const  postMessages= await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}
const createPost = (req, res) => {
    res.send('Create Post route is working!');
}
export { getposts };