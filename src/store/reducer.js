import { combineReducers } from 'redux'

//recommend的轮播图
import { reducer as recommendReducer} from '@/pages/discover/discover-content/recommend/store'

//合并来自不同页面的多个Reducer
const cReducer = combineReducers({
    recommend: recommendReducer
})

//导出合并的Reducer  Export the combine Reducer
export default cReducer