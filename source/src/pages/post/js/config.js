import { defineAsyncComponent } from 'vue'
import { transTocToDom } from '@src/js/util'

const getTocFromModule = (m) => {
    const d = m.default;
    let res = [];
    if (d.__toc) {
        res = d.__toc;
    } else if (d.components) {
        Object.keys(d.components).forEach(compName => {
            const MdComponent = d.components[compName];
            const tocArr = MdComponent.__toc;
            if (tocArr?.length) {
                res = res.concat(tocArr)
            }
        })
    }

    return res;
}

const getMdComponentWithPromise = (promise, callback) => {
    return defineAsyncComponent(() =>
        promise.then(m => {
            callback && callback({
                toc: transTocToDom(getTocFromModule(m))
            });
            return m;
        })
    );
}

const getArticle1 = () => {
    return new Promise((resolve) => {
        resolve(import('../markdowns/1.md'));
    })
}
const getArticle2 = () => {
    return new Promise((resolve) => {
        resolve(import('../markdowns/2.md'));
    })
}

export const articleList = [
    { title: '我的第一篇文章', path: '/post/1/' },
    { title: '我的第二篇文章', path: '/post/2/' },
];

const asyncMdComponents = [
    (callback) => getMdComponentWithPromise(getArticle1(), callback),
    (callback) => getMdComponentWithPromise(getArticle2(), callback),
];

export const getAsyncMdComponent = (page, callback) => {
    return asyncMdComponents[Number(page || 1) - 1](callback)
}
