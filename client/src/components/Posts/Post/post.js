import React from "react";
import { Card,CardActions,CardContent,CardMedia,Button,Typography } from "@material-ui/core";
import {ThumbUpAlt,Delete,MoreHoriz} from "@material-ui/icons";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts.js";
import { likePost } from "../../../actions/posts.js";
const Post=({post,setCurrentId})=>{
    const classes=useStyles();
    const dispatch=useDispatch();
    return(
       <Card className={classes.card} > 
         {/* Use styled media class so the image has height */}
         <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{new Date(post.createdAt).toDateString()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" >
                    <MoreHoriz fontSize="default" onClick={() => {
                        setCurrentId(post._id);
                    }} />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag} `)}</Typography>   
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>{
                    dispatch(likePost(post._id));
                }}>
                    <ThumbUpAlt fontSize="small" />
                    &nbsp; Like &nbsp; {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>{
                    dispatch(deletePost(post._id));
                }}>
                    <Delete fontSize="small" />
                    Delete
                </Button>
            </CardActions>
       </Card>


    
      )            
}
export default Post;