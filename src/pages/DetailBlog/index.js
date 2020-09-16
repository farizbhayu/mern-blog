import React from 'react';
import {RegisterBg} from '../../assets';
import './detailBlog.scss';
import { Link, Gap } from '../../components/atoms';
import {useHistory} from 'react-router-dom';

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt blandit pharetra. Duis in nibh at tortor finibus rhoncus faucibus id ex. Sed sollicitudin, mauris mattis sollicitudin commodo, purus sem rutrum justo, at varius elit dolor sed neque. Proin felis nibh, accumsan non efficitur porta, accumsan quis est. Sed faucibus.</p>
            <Link 
                title="Kembali ke Home"
                onClick={() => history.push('/')}
            />
            <Gap height={20} />
        </div>
    )
}

export default DetailBlog
