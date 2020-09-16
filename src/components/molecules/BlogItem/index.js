import React from 'react';
import './blogItem.scss';
import { RegisterBg } from '../../../assets';
import { Button, Gap } from '../../atoms';
import {useHistory} from 'react-router-dom';

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt blandit pharetra. Duis in nibh at tortor finibus rhoncus faucibus id ex. Sed sollicitudin, mauris mattis sollicitudin commodo, purus sem rutrum justo, at varius elit dolor sed neque. Proin felis nibh, accumsan non efficitur porta, accumsan quis est. Sed faucibus.</p>
                <Gap height={20} />
                <Button 
                    title="View Detail"
                    onClick={() => history.push('/detail-blog')}
                />
            </div>
        </div>
    )
}

export default BlogItem
