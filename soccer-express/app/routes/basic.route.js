const { bmi,calc,grade } = require('../controllers/basic.controller');
module.exports = x => {
    x.app.post(`${x.url}/bmi`, bmi) 
    x.app.post(`${x.url}/calc`, calc) 
    x.app.post(`${x.url}/grade`, grade) 
} 


// const { admin } = require('../controllers/admin.controller')
// module.exports = x => x.app.post(`${x.url}/admin`,admin)