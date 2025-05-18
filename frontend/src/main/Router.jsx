import {Routes, Route} from 'react-router'

import Main from '../components/template/Main'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Routes>
        <Route exact path ="/" element= {<Main/>}/>
        <Route path="/users" element={<UserCrud/>}/>
        <Route path="*" element={<Main/>}/>
        </Routes>