import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPost } from '../redux/postReducer';
import axios from 'axios';

const CreatePost = (props) => {
    const [data, setData] = useState({
        id: null,
        date: null,
        category: '',
        title: '',
        description: '',
        media: null
    })

    const history = useHistory();

    const submitPost = (e) => {
        e.preventDefault();
        console.log(props)
        const { id } = props;
        const data1 = { id: id, date: data.date, category: data.category, title: data.title, description: data.description, media: data.media };
        axios.post('/user/post/createpost', data1)
            .then(res => {

                props.createPost({ date: res.data.date, category: res.data.category, title: res.data.title, description: res.data.description, media: res.data.media })
                alert('Post successfully submitted')
                history.push('/user/dash')
            })
            .catch(err => console.log(err))
    }

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const goBack = () => {
        history.push('/user/dash')
    }

    return (
        <div>
            <form className='createTicket'>
                <h1 className='newHeader'>Create New Post</h1>
                <button type='button' className='backBtn' onClick={() => goBack()} >&#8678;</button>
                <input className='newTitle' type='text' placeholder='Title' onChange={onChange} name='title' value={data.title} />
                <select className='select' name='category' onChange={onChange} selected>
                    <option value='' disabled selected>Please select an option </option>
                    <option name='general' value='Arts and Crafts' >Arts and Crafts</option>
                    <option name='internet' value='Fashion'>Fashion</option>
                    <option name='website' value='Technology'>Technology</option>
                    <option name='suggestion' value='Tutorial'>Tutorial</option>
                    <option name='other' value='other'>Other</option>
                </select>
                <textarea className='textInput' type='text' placeholder='description' onChange={onChange} name='description' value={data.description} />
                <button className='submitTicket' type='submit' onClick={(e) => submitPost(e)} >Submit Request</button>
            </form>

        </div>
    )
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, {createPost})(CreatePost);