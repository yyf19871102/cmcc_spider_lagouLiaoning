/**
 * @auth yangyufei
 * @date 2018-12-12 17:34:56
 * @desc
 */
const fetcher = require('./fetcher');
const fs = require('fs');
const uuid = require('uuid/V4');

// fetcher.getAnnCount().then(data => {
//     console.log(JSON.stringify(data, null, 4))
// });

// fetcher.getNaviData(1, 1, 1000).then(data => {
//     fs.writeFileSync('d://getNaviData.json', JSON.stringify(data, null, 4));
// });

// fetcher.searchJobList('沈阳', 'Java', 1).then(console.log);

fetcher.getCategories().then(data => {
    fs.writeFileSync('d://cate.json', JSON.stringify(data, null, 4));
});