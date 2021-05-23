import { createStore, applyMiddleware , compose } from 'redux'
import thunk from "redux-thunk"

import reducer from "./reducer"

//1.因为每个功能模块为一个reducer，所以需要建立多个reducer  
//2.applyMiddleware融合多个thunk，通过redux-devtools-extension把applyMiddleware包裹
//3.composeEnhancers从window调用compose，如果window没有，从redux调用compose
//4.composeEnhancers新生成instance包裹applyMiddleware
//5.把创建好的store导出
//6.在App.js调用provider通过provider把store在不同组件页面共享

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

export default store