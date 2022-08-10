export const transTocToDom = (toc = []) => {
    const top = [];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    toc.forEach((item) => {
        if (item.level === '1') {
            top.push({ content: item.content, child: [], level: '1', index: count1++ });
        } else if (item.level === '2') {
            const parentIndex = ((item.content || '').match(/^\d+/) || [])[0];
            const parent = top[Number(parentIndex) - 1];
            if (parent) {
                parent.child.push({
                    content: item.content.replace(/^(\d+\.?)+?\s/, ''),
                    child: [],
                    level: '2', index: count2++
                })
            }
        } else if (item.level === '3') {
            const match = (item.content || '').match(/^(\d+)\.(\d+)/) || [];
            const topParent = top[Number(match[1]) - 1] || { child: ['bbb'] };
            const parent = topParent.child[Number(match[2]) - 1];
            if (parent) {
                parent.child.push({
                    content: item.content.replace(/^(\d+\.?)+?\s/, ''),
                    child: [],
                    level: '3', index: count3++
                })
            }
        }
    });


    const generateHtml = (list = []) => {
        let html = '<ul>';
        list.forEach(item => {
            html += `<li><span title="${item.content}" data-index="${item.index}" data-level="${item.level}">${item.content}</span>`

            if (item.child.length) {
                html += generateHtml(item.child);
            }
            html += '</li>'
        });
        html += '</ul>';
        return html;
    }

    return generateHtml(top);
}