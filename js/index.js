const textarea = document.getElementById('textarea')
const tagsEl = document.getElementById('tags')

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if (e.key === 'Enter') {
        reandomSelect()
    }
})
// 创建标签
function createTags(value) {
    // 逗号分隔 并转成数组 并筛选出
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    tagsEl.innerHTML = ''
    tags.forEach(tag => {
        const ADDP = document.createElement('span') // 给div盒子添加span标签
        ADDP.classList.add('tag') // 添加类名
        ADDP.innerText = tag;
        tagsEl.appendChild(ADDP)
    })
}
function reandomSelect() {
    const interval = setInterval(() => {
        const result = piclRandomSelect()
        if (result !== undefined) {
            HigTag(result)
            setTimeout(() => {
                unHigTag(result)
            }, 100);
        }
    }, 100)
    const times = 30;
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const result = piclRandomSelect()
            if (result !== undefined) {
                HigTag(result)
            }
        }, 100);
    }, times * 100);
}
function piclRandomSelect() {
    const tags = document.querySelectorAll('.tag') // 获取所有时候生成的span
    // 生成和span标签一样多的随机数并取整 返回给定时器
    return tags[parseInt(Math.random() * tags.length)]
}
function HigTag(val) {
    val.classList.add('hig') // 添加类名
}
function unHigTag(val) {
    val.classList.remove('hig')
}