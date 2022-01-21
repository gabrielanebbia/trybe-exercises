const fs = require('fs');

module.exports = (fileName, data) => {
  fs.writeFileSync(fileName, data)
    return 'ok';
}
